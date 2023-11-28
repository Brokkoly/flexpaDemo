import { Bundle, ExplanationOfBenefit } from "fhir/r4";
import { useContext, useEffect, useState } from "react";
import { AccessTokenContext } from "./Login";
import { FlexpaApi } from "./flexpaApi";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  gridDateComparator,
} from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "createdAt",
    headerName: "Created At",
    type: "date",
    width: 200,
    valueFormatter: (params) => new Date(params?.value).toLocaleString(),
    sortComparator: gridDateComparator,
  },
  { field: "facilityName", headerName: "Facility Name", width: 300 },
  { field: "provider", headerName: "Provider Name", width: 150 },
  { field: "coverage", headerName: "Coverage Name", width: 300 },
];

/**
 * Pulls data from an ExplanationOfBenefit record and returns it
 * @param eob a fhir ExplanationOfBenefit record
 * @returns Formatted data for displaying
 */
function createData(eob?: ExplanationOfBenefit) {
  let insurance = eob?.insurance[0];
  let coverage = "None";
  if (insurance) {
    coverage =
      insurance?.coverage?.display ??
      eob?.insurer?.display ??
      "Unknown Value Was Null";
  }
  return {
    id: eob?.id,
    provider: eob?.provider?.display ?? "Unknown",
    facilityName: eob?.facility?.display ?? "Unknown",
    coverage: coverage,
    createdAt: new Date(eob?.created ?? ""),
  };
}

/**
 * Create the rows for the data grid out of a bundle that may include an OutcomeResponse
 * @param bundle A bundle of EOB data to parse into row data
 * @returns GridRowProps for the data grid
 */
const bundleToGridRowsProp = (
  bundle: Bundle<ExplanationOfBenefit>
): GridRowsProp => {
  const entries = bundle.entry;
  const gridRowProps = entries?.flatMap((entry) => {
    if (entry?.resource?.resourceType !== "ExplanationOfBenefit") {
      return [];
    }
    return [createData(entry.resource as ExplanationOfBenefit)];
  });
  if (!gridRowProps) {
    return [];
  }
  return gridRowProps;
};

/**
 * Displays Explanation of Benefit info from the backend automatically when
 * the context is updated with an access token
 * @returns A datagrid of Explanation Of Benefit info
 */
export function EOBInfo() {
  const accessToken = useContext(AccessTokenContext);
  const [rows, setRows] = useState<GridRowsProp>([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (accessToken) {
      const flexpaApi = new FlexpaApi(accessToken);
      flexpaApi
        .searchEOB()
        .then((data) => {
          const entries = (data as Bundle).entry;
          setRows(bundleToGridRowsProp(data as Bundle<ExplanationOfBenefit>));
        })
        .catch((err) => {
          setErrorMessage(err);
        });
    } else {
      setErrorMessage("");
      setRows([]);
    }
  }, [accessToken]);
  return errorMessage ? (
    <span>{`An error ocurred while loading: ${errorMessage}`}</span>
  ) : rows?.length > 0 ? (
    <DataGrid
      style={{ width: "100%", backgroundColor: "white" }}
      rows={rows}
      columns={columns}
      initialState={{
        sorting: {
          sortModel: [{ field: "createdAt", sort: "desc" }],
        },
      }}
    />
  ) : (
    <span>No data to show yet</span>
  );
}
