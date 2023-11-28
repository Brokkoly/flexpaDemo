import { Bundle, ExplanationOfBenefit } from "fhir/r4";

export class FlexpaApi {
  private authHeaders: Headers = new Headers();
  constructor(private accessToken: string) {
    this.authHeaders.append("Authorization", `Bearer ${accessToken}`);
  }

  public async searchEOB(
    id?: string
  ): Promise<Bundle<ExplanationOfBenefit> | ExplanationOfBenefit> {
    const response = await fetch(
      `http://localhost:9000/flexpa/ExplanationOfBenefit${id ? `/${id}` : ""}`,
      {
        method: "GET",
        headers: this.authHeaders,
      }
    );
    const body = await response.json();
    if(response.status!==200){
        console.log(body);
        throw new Error(body.message);
    }
    return body;
  }
}

export interface TokenResponse {
  access_token: string;
  expires_in: number;
  refresh_expires_in: null;
  endpoint: Endpoint;
}

export interface Endpoint {
  id: string;
  name: string;
  label: string[];
  refreshable: boolean;
  resources: string[];
}
