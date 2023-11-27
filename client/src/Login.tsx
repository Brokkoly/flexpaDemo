import { ReactElement, createContext, useEffect, useState } from "react";
import { TokenResponse } from "./flexpaApi";
import { Button } from "@mui/material";
import { useScript } from "usehooks-ts";

export const AccessTokenContext = createContext("");

declare const FlexpaLink: any;

export function LoginProvider(props: {
  existingAccessTokenInfo?: TokenResponse;
  children: ReactElement;
}) {
  const status = useScript("https://js.flexpa.com/v1/", {
    removeOnUnmount: false,
  });
  const [accessTokenInfo, setAccessTokenInfo] = useState<TokenResponse>();

  const getFlexpaAccessToken = async (publicToken: string) => {
    //TODO: make this an environment-based variable
    fetch("http://localhost:9000/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        publicToken,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        setAccessTokenInfo(data);
      });
  };

  //TODO: put this into a provider
  const flexpaLinkCreate = async () => {
    console.log("inFlexpaLinkCreate");
    FlexpaLink.create({
      //TODO: make this an environment-based variable
      publishableKey: "pk_test_b9nO_Y1yytW5g57G1bTFNG0CDpuDW-v3r5onhNG6pp8",
      endpoint: "7c308678-b82f-4787-b961-9e62f24d4120", //TODO: remove after testing
      onSuccess: (publicToken: string) => {
        console.log("success");
        getFlexpaAccessToken(publicToken).then(() => {

          console.log("loaded");
        });
      },
    });
  };

  useEffect(() => {
    console.log("in useEffect");
    if (typeof FlexpaLink !== "undefined") {
      console.log("calling flexpaLinkCreate");
      flexpaLinkCreate();
    }
  }, [status]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "45px",
          backgroundColor: "grey",
          width: "100%",
          alignSelf: "flex-start",
        }}
      >
        {accessTokenInfo ? (
          <Button style={{ backgroundColor: "blue", color: "white" }}
          onClick={()=>{
            setAccessTokenInfo(undefined);
          }}>
            Logout
          </Button>
        ) : (
          <Button
            style={{
              backgroundColor: "blue",
              color: "white",
              alignSelf: "flex-end",
            }}
            disabled={status !== "ready"}
            onClick={() => {
              FlexpaLink.open();
            }}
          >
            Login
          </Button>
        )}
      </div>
      <AccessTokenContext.Provider value={accessTokenInfo?.access_token ?? ""}>
        {props.children}
      </AccessTokenContext.Provider>
    </>
  );
}
