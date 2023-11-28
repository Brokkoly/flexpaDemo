import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Bundle, Resource } from 'fhir/r4';
import { jwtDecode } from 'jwt-decode';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Exchanges a FlexLink public token for an access token
   * @param publicToken a public token retrieved by FlexLink
   * @returns an object containing the access token and an endpoint resource
   */
  async getToken(publicToken: string) {
    const response = await fetch('https://api.flexpa.com/link/exchange', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        public_token: publicToken,
        secret_key: this.configService.get('SECRET_KEY'),
      }),
    });
    const body = await response.json();
    return body;
  }

  /**
   * Search through EOB resources
   * @param accessToken an access token from the flexpa token exchange
   * @param resource the resource type to retrieve
   * @param id An optional id for getting a specific resource
   * @returns a single resource or a bundle of resources
   */
  public async searchEOB(
    accessToken: string,
    resource: string,
    id?: string,
  ): Promise<Bundle<Resource> | Resource> {
    const patientId = jwtDecode(accessToken).sub.split('/')[1] ?? undefined;
    if (!patientId) {
      throw new UnauthorizedException(
        'The access token did not provide a valid patient id',
      );
    }
    const url = `https://api.flexpa.com/fhir/${resource}${
      id ? `/${id}` : ''
    }?patient=${patientId}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: accessToken.startsWith('Bearer')
          ? accessToken
          : `Bearer ${accessToken}`,
      },
    });
    const body = await response.json();
    if (body.resourceType === 'OperationOutcome' && body.issue) {
      throw new BadRequestException(body.issue[0].details.text);
    }
    return body;
  }
}
