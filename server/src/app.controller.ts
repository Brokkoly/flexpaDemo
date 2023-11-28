import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('token')
  async getToken(@Body('publicToken') publicToken: string) {
    return this.appService.getToken(publicToken);
  }

  @Get('flexpa/:resource')
  async getExplanationOfBenefit(
    @Headers('Authorization') accessToken: string,
    @Param('resource') resource: string,
  ) {
    if (!accessToken) {
      return new UnauthorizedException(
        'No access token found in authorization header',
      );
    }
    return this.appService.searchEOB(accessToken, resource);
  }

  @Get('flexpa/:resource/:id')
  async getSingleExplanationOfBenefit(
    @Headers('Authorization') accessToken: string,
    @Param('resource') resource: string,
    @Param('id') id,
  ) {
    if (!accessToken) {
      return new UnauthorizedException(
        'No access token found in authorization header',
      );
    }
    return this.appService.searchEOB(accessToken, resource, id);
  }
}
