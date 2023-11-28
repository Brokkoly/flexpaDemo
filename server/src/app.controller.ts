import { Body, Controller, Get, Headers, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('token')
  async getToken(@Body('publicToken') publicToken: string) {
    return this.appService.getToken(publicToken);
  }

  @Get('flexpa/:resource')
  async getExplanationOfBenefit(@Headers('Authorization') accessToken: string, @Param('resource')resource: string) {
    return this.appService.searchEOB(accessToken, resource);
  }

  @Get('flexpa/:resource/:id')
  async getSingleExplanationOfBenefit(@Headers('Authorization') accessToken: string,@Param('resource')resource: string, @Param('id') id) {
    return this.appService.searchEOB(accessToken, resource,id);
  }
}
