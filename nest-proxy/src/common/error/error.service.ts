import { Injectable } from '@nestjs/common';
import { AxiosErrorHandler } from './handlers/axios-error.handler';
import { GenericErrorHandler } from './handlers/generic-error.handler';
import { OtherErrorHandler } from './handlers/other-error.handler';
import { IErrorHandler, TErrorResponse } from './error.interface';

@Injectable()
class ErrorService {
  private readonly errorHandlers: IErrorHandler[];

  constructor(
    axiosError: AxiosErrorHandler,
    genericError: GenericErrorHandler,
    otherError: OtherErrorHandler,
  ) {
    this.errorHandlers = [axiosError, genericError, otherError];
  }

  normalizeError(error: unknown): TErrorResponse {
    const handler = this.errorHandlers.find((handler) =>
      handler.canHandle(error),
    );
    return handler
      ? handler.handle(error)
      : {
          status: 510,
          message: 'Something went wrong',
          type: 'Ninja error, smthing fucked up',
        };
  }
}

export default ErrorService;
