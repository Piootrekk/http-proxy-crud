import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import UrlService from './url.sevice';
import { AxiosError } from 'axios';

const PREFIX = 'url';

@Controller(PREFIX)
class UrlComponent {
  private readonly urlService: UrlService;
  constructor(urlService: UrlService) {
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
    return {
      status: 500,
      message: 'An unknown error',
    };
  };

  @Get('*')
  async getProxy(@Req() req: Request, @Res() res: Response) {
    try {
      const rawUrl = req.originalUrl.replace(PREFIX, '');
      if (!rawUrl.startsWith('http://') && !rawUrl.startsWith('https://')) {
        throw new HttpException('Invalid URL', HttpStatus.BAD_REQUEST);
      }
      const endpointUrl = new URL(rawUrl);
      const response = await this.urlService.fetchData(endpointUrl);
      return response;
    } catch (err) {
      const normalizedError = this.errorNormalize(err);
      throw new HttpException(normalizedError.message, normalizedError.status);
    }
  }
}

export default UrlComponent;
