import { Injectable } from '@nestjs/common';
import type { IErrorHandler, TErrorResponse } from '../error.interface';

@Injectable()
class GenericErrorHandler implements IErrorHandler {
  canHandle(error: unknown): boolean {
    return error instanceof Error;
  }

  handle(error: Error): TErrorResponse {
    return { status: 500, message: error.message };
  }
}

export { GenericErrorHandler };
