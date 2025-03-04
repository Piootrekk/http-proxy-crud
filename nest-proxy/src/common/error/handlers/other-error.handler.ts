import { Injectable } from '@nestjs/common';
import type { IErrorHandler, TErrorResponse } from '../error.interface';
import { error } from 'console';

@Injectable()
class OtherErrorHandler implements IErrorHandler {
  canHandle(_: unknown): boolean {
    return true;
  }

  handle(_: unknown): TErrorResponse {
    return { status: 500, message: 'Unknown error', type: error.name };
  }
}

export { OtherErrorHandler };
