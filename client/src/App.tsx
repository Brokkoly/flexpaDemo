import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useScript } from "usehooks-ts";
import { Endpoint, FlexpaApi } from "./flexpaApi";
import { Bundle, ExplanationOfBenefit } from "fhir/r4";
import { EOBInfo, EOBListTable } from "./EOBInfo";
import { LoginProvider } from "./Login";


function App() {
  

  const [flexpaAccessToken, setFlexpaAccessToken] = useState("");
  const [eobListInfo, setEobListInfo] = useState<
    Bundle<ExplanationOfBenefit>>();
  const [currentEOB, setCurrentEOB] = useState<ExplanationOfBenefit>()
  const [endpoint, setEndpoint] = useState<Endpoint>();

  

  return (
    <div className="App">
      <header className="App-header">
        <LoginProvider existingAccessTokenInfo={undefined}>
          <EOBInfo />
        {/* <button
          disabled={!flexpaAccessToken}
          onClick={() => {
            const flexpaApi = new FlexpaApi(flexpaAccessToken);
            flexpaApi.searchEOB().then((data) => {
              console.log(data);
              setEobListInfo(data as Bundle<ExplanationOfBenefit>);
            });
          }}
        >
          Load Data
        </button>
        {eobListInfo?<EOBListTable data={eobListInfo}/>:<></> } */}
        </LoginProvider>
      </header>
    </div>
  );
}

export default App;
