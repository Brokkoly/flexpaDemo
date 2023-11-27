import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Bundle, ExplanationOfBenefit, OperationOutcome } from "fhir/r4";
import React, { useContext, useEffect, useState } from "react";
import { testEOBJSON } from "./testData";
import { AccessTokenContext } from "./Login";
import { FlexpaApi } from "./flexpaApi";

// export type EOBDisplayProps
// function EOBDisplay(){

// }

export interface EOBListProps {
  data?: Bundle;
}

function createData(eob?: ExplanationOfBenefit) {
  let insurance = eob?.insurance[0];
  let coverage = "None";
  if (insurance) {
    coverage = insurance?.coverage?.display ?? "Unknown Value Was Null";
  }
  return {
    provider: eob?.provider?.display ?? "Unknown Value Was Null",
    facilityName: eob?.facility?.display ?? "Unknown Value Was Null",
    coverage: coverage,
    created: eob?.created ? new Date(eob?.created).toLocaleString() : "Unknown",
  };
}

export function EOBListTable({
  data = testEOBJSON as Bundle<ExplanationOfBenefit>,
}: EOBListProps) {
  const rows = data.entry ?? [];
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Created At</TableCell>
            <TableCell>Facility</TableCell>
            <TableCell>Provider</TableCell>
            <TableCell>Insurer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.flatMap((row) => {
            if (row?.resource?.resourceType !== "ExplanationOfBenefit") {
              return [];
            }
            return [<EOBListRow
              key={row.resource?.id}
              row={createData(row.resource)}
            />];
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function EOBListRow(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {/* <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell> */}
        <TableCell component="th" scope="row">
          {row.created}
        </TableCell>
        <TableCell>{row.facilityName}</TableCell>
        <TableCell>{row.provider}</TableCell>
        <TableCell>{row.coverage}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export function EOBInfo() {
  const accessToken = useContext(AccessTokenContext);
  const [eobData, setEobData] = useState<Bundle<ExplanationOfBenefit>>();
  useEffect(() => {
    if (accessToken) {
      const flexpaApi = new FlexpaApi(accessToken);
      flexpaApi.searchEOB().then((data) => {
        setEobData(data as Bundle<ExplanationOfBenefit>);
      });
    }
  }, [accessToken]);
  return eobData ? (
    <EOBListTable data={eobData} />
  ) : (
    <span>No data to show yet</span>
  );
}
