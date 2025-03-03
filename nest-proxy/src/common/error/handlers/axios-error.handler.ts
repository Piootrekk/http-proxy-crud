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
      return { status: error.response.status, message: error.message };
    }
    if (error.request) {
      return { status: 500, message: 'Internal server error' };
    } else return { status: 500, message: 'Unknown axios error' };
  }
}

export { AxiosErrorHandler };
