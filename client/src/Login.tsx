import { ReactElement, createContext, useEffect, useState } from "react";
import { TokenResponse } from "./flexpaApi";
import { Box, Button } from "@mui/material";
import { useScript } from "usehooks-ts";

export const AccessTokenContext = createContext("");

declare const FlexpaLink: any;

export function LoginProvider(props: {
  existingAccessTokenInfo?: TokenResponse;
  children: ReactElement;
}) {
  //Load the flexpa script
  const status = useScript("https://js.flexpa.com/v1/", {
    removeOnUnmount: false,
  });
  const [accessTokenInfo, setAccessTokenInfo] = useState<TokenResponse>();

  const getFlexpaAccessToken = async (publicToken: string) => {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/token`, {
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
        setAccessTokenInfo(data);
      });
  };

  //Wait to load until the script has loaded
  useEffect(() => {
    if (typeof FlexpaLink !== "undefined") {
      FlexpaLink.create({
        publishableKey: process.env.REACT_APP_PUBLISHABLE_KEY,
        onSuccess: (publicToken: string) => {
          getFlexpaAccessToken(publicToken);
        },
      });
    }
  }, [status]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "auto",
          padding: "5px",
          backgroundColor: "grey",
          alignContent: "center",
          width: "100%",
          alignSelf: "flex-start",
        }}
      >
        {accessTokenInfo ? (
          <>
            <Box
              component="img"
              style={{
                height: "48px",
                aspectRatio: "1",
                alignSelf: "center",
                marginRight: "5px",
                borderRadius: "24px",
              }}
              //TODO: Fallback to something if this image doesn't exist (Low Priority)
              src={`https://cdn.flexpa.com/logos/${accessTokenInfo.endpoint.id}`}
            />
            <Button
              style={{ backgroundColor: "blue", color: "white" }}
              onClick={() => {
                setAccessTokenInfo(undefined);
              }}
            >
              Logout
            </Button>
          </>
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
