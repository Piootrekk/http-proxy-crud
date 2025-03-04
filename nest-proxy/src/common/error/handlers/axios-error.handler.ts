import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import type { IErrorHandler, TErrorResponse } from '../error.interface';

@Injectable()
class AxiosErrorHandler implements IErrorHandler {
  canHandle(error: unknown): boolean {
    return error instanceof AxiosError;
  }

  handle(error: AxiosError): TErrorResponse {
    if (error.response) {
      return {
        status: error.response.status,
        message: error.message,
        type: error.name,
      };
    }
    if (error.request) {
      return {
        status: 500,
        message: 'Internal server error',
        type: error.name,
      };
    } else
      return {
        status: 500,
        message: error.message || 'Unknown axios error',
        type: error.name,
      };
  }
}

export { AxiosErrorHandler };
