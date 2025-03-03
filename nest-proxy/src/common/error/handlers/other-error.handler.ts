import { Injectable } from '@nestjs/common';
import type { IErrorHandler, TErrorResponse } from '../error.interface';

@Injectable()
class OtherErrorHandler implements IErrorHandler {
  canHandle(_: unknown): boolean {
    return true;
  }

  handle(error: unknown): TErrorResponse {
    return { status: 500, message: 'Unknown error' };
  }
}

export { OtherErrorHandler };
