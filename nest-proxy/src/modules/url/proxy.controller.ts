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
} from '@nestjs/common';
import ProxyService from './proxy.sevice';
import { SwaggerProxyMetadata, SwaggerProxyApiTags } from './proxy.swagger';
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

  @Get('*path')
  @SwaggerProxyMetadata.operationGet
  @SwaggerProxyMetadata.params
  @SwaggerProxyMetadata.okResponse
  @SwaggerProxyMetadata.errorResponse
  @SwaggerProxyMetadata.errorServer
  async getProxy(@Param('path') path: string) {
    try {
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
  @SwaggerProxyMetadata.operationPost
  @SwaggerProxyMetadata.params
  @SwaggerProxyMetadata.body
  @SwaggerProxyMetadata.okResponse
  @SwaggerProxyMetadata.errorResponse
  @SwaggerProxyMetadata.errorServer
  async postProxy(@Param('path') path: string, @Body() body: unknown) {
    try {
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
  @SwaggerProxyMetadata.operationPut
  @SwaggerProxyMetadata.params
  @SwaggerProxyMetadata.body
  @SwaggerProxyMetadata.okResponse
  @SwaggerProxyMetadata.errorResponse
  @SwaggerProxyMetadata.errorServer
  async putProxy(@Param('path') path: string, @Body() body: unknown) {
    try {
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
  @SwaggerProxyMetadata.operationPatch
  @SwaggerProxyMetadata.params
  @SwaggerProxyMetadata.body
  @SwaggerProxyMetadata.okResponse
  @SwaggerProxyMetadata.errorResponse
  @SwaggerProxyMetadata.errorServer
  async patchProxy(@Param('path') path: string, @Body() body: unknown) {
    try {
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
  @SwaggerProxyMetadata.operationDelete
  @SwaggerProxyMetadata.params
  @SwaggerProxyMetadata.okResponse
  @SwaggerProxyMetadata.errorResponse
  @SwaggerProxyMetadata.errorServer
  async deleteProxy(@Param('path') path: string) {
    try {
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
