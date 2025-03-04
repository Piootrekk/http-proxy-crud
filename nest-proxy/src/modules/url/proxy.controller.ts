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
import { ProxyMetadata, ProxyApiTags } from './proxy.swagger';
import { CommonService } from 'src/common/common.service';

@Controller('url')
@ProxyApiTags
class ProxyController {
  private readonly urlService: ProxyService;
  private readonly commonService: CommonService;

  constructor(urlService: ProxyService, commonService: CommonService) {
    this.urlService = urlService;
    this.commonService = commonService;
  }

  @Get('*path')
  @ProxyMetadata.operationGet
  @ProxyMetadata.params
  @ProxyMetadata.okResponse
  @ProxyMetadata.errorResponse
  @ProxyMetadata.errorServer
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
  @ProxyMetadata.operationPost
  @ProxyMetadata.params
  @ProxyMetadata.body
  @ProxyMetadata.okResponse
  @ProxyMetadata.errorResponse
  @ProxyMetadata.errorServer
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
  @ProxyMetadata.operationPut
  @ProxyMetadata.params
  @ProxyMetadata.body
  @ProxyMetadata.okResponse
  @ProxyMetadata.errorResponse
  @ProxyMetadata.errorServer
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
  @ProxyMetadata.operationPatch
  @ProxyMetadata.params
  @ProxyMetadata.body
  @ProxyMetadata.okResponse
  @ProxyMetadata.errorResponse
  @ProxyMetadata.errorServer
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
  @ProxyMetadata.operationPost
  @ProxyMetadata.params
  @ProxyMetadata.okResponse
  @ProxyMetadata.errorResponse
  @ProxyMetadata.errorServer
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
