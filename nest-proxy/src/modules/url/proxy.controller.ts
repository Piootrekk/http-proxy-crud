import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import ProxyService from './proxy.sevice';
import { ProxySwagger, SwaggerProxyApiTags } from './proxy.swagger';
import { CommonService } from 'src/common/common.service';

@Controller('url')
@SwaggerProxyApiTags
class ProxyController {
  private readonly urlService: ProxyService;
  private readonly commonService: CommonService;

  constructor(urlService: ProxyService, commonService: CommonService) {
    this.urlService = urlService;
    this.commonService = commonService;
  }

  @ProxySwagger('GET')
  @Get('*path')
  async getProxy(@Param('path') path: string, @Req() request: Request) {
    try {
      path = this.urlService.fixWildCardRequest(request.url);
      const normaizedUrl = this.urlService.decodeEncodedUrl(path);
      const response = await this.urlService.getData(normaizedUrl);
      return response;
    } catch (err) {
      const normalizedError =
        this.commonService.errorService.normalizeError(err);
      throw new HttpException(
        {
          message: normalizedError.message,
          status: normalizedError.status,
          url: path,
          type: normalizedError.type,
        },
        normalizedError.status,
      );
    }
  }

  @Post('*path')
  @ProxySwagger('POST')
  async postProxy(
    @Param('path') path: string,
    @Body() body: unknown,
    @Req() request: Request,
  ) {
    try {
      path = this.urlService.fixWildCardRequest(request.url);
      const normaizedUrl = this.urlService.decodeEncodedUrl(path);
      const response = await this.urlService.postData(normaizedUrl, body);
      return response;
    } catch (err) {
      const normalizedError =
        this.commonService.errorService.normalizeError(err);
      throw new HttpException(
        {
          message: normalizedError.message,
          status: normalizedError.status,
          url: path,
          type: normalizedError.type,
        },
        normalizedError.status,
      );
    }
  }

  @Put('*path')
  @ProxySwagger('PUT')
  async putProxy(
    @Param('path') path: string,
    @Body() body: unknown,
    @Req() request: Request,
  ) {
    try {
      path = this.urlService.fixWildCardRequest(request.url);
      const normaizedUrl = this.urlService.decodeEncodedUrl(path);
      const response = await this.urlService.putData(normaizedUrl, body);
      return response;
    } catch (err) {
      const normalizedError =
        this.commonService.errorService.normalizeError(err);
      throw new HttpException(
        {
          message: normalizedError.message,
          status: normalizedError.status,
          url: path,
          type: normalizedError.type,
        },
        normalizedError.status,
      );
    }
  }

  @Patch('*path')
  @ProxySwagger('PATCH')
  async patchProxy(
    @Param('path') path: string,
    @Body() body: unknown,
    @Req() request: Request,
  ) {
    try {
      path = this.urlService.fixWildCardRequest(request.url);
      const normaizedUrl = this.urlService.decodeEncodedUrl(path);
      const response = await this.urlService.patchtData(normaizedUrl, body);
      return response;
    } catch (err) {
      const normalizedError =
        this.commonService.errorService.normalizeError(err);
      throw new HttpException(
        {
          message: normalizedError.message,
          status: normalizedError.status,
          url: path,
          type: normalizedError.type,
        },
        normalizedError.status,
      );
    }
  }

  @Delete('*path')
  @ProxySwagger('DELETE')
  async deleteProxy(@Param('path') path: string, @Req() request: Request) {
    try {
      path = this.urlService.fixWildCardRequest(request.url);
      const normaizedUrl = this.urlService.decodeEncodedUrl(path);
      const response = await this.urlService.deletetData(normaizedUrl);
      return response;
    } catch (err) {
      const normalizedError =
        this.commonService.errorService.normalizeError(err);
      throw new HttpException(
        {
          message: normalizedError.message,
          status: normalizedError.status,
          url: path,
          type: normalizedError.type,
        },
        normalizedError.status,
      );
    }
  }
}

export default ProxyController;
