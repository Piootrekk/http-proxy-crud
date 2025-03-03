import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Req,
  Res,
} from '@nestjs/common';
import { Request } from 'express';
import ProxyService from './proxy.sevice';
import { AxiosError } from 'axios';
import { GetProxyCheckMetadata, ProxyApiTags } from './proxy.swagger';

const PREFIX = 'url';

@Controller(PREFIX)
@ProxyApiTags
class ProxyController {
  private readonly urlService: ProxyService;
  constructor(urlService: ProxyService) {
    this.urlService = urlService;
  }

  private errorNormalize = (err: unknown) => {
    if (err instanceof AxiosError) {
      if (err.response) {
        return {
          status: err.response.status,
          message: err.message,
        };
      }
      if (err.request) {
        return {
          status: 500,
          message: 'Internal server error',
        };
      }
      return {
        status: 500,
        message: 'An unknown error occurred from fetching data',
      };
    }
    if (err instanceof Error) {
      return {
        status: 500,
        message: err.message,
      };
    }
    return {
      status: 500,
      message: 'An unknown error',
    };
  };

  @Get('*path')
  @GetProxyCheckMetadata.params
  @GetProxyCheckMetadata.operation
  @GetProxyCheckMetadata.okResponse
  @GetProxyCheckMetadata.invalidResponse
  async getProxy(@Req() req: Request) {
    const rawUrl = req.originalUrl.replace(`/${PREFIX}/`, '');
    // if (!rawUrl.startsWith('http://') && !rawUrl.startsWith('https://')) {
    //   console.log('ugh');
    //   throw new HttpException(
    //     {
    //       message: 'Invalid URL',
    //       status: HttpStatus.BAD_REQUEST,
    //       url: rawUrl,
    //     },
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    try {
      const endpointUrl = new URL(rawUrl);
      const response = await this.urlService.fetchData(endpointUrl);
      return response;
    } catch (err) {
      const normalizedError = this.errorNormalize(err);
      throw new HttpException(
        {
          message: normalizedError.message,
          status: normalizedError.status,
          url: rawUrl,
        },
        normalizedError.status,
      );
    }
  }
}

export default ProxyController;
