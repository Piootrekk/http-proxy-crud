import { Module } from '@nestjs/common';
import ErrorService from './error.service';
import { AxiosErrorHandler } from './handlers/axios-error.handler';
import { GenericErrorHandler } from './handlers/generic-error.handler';
import { OtherErrorHandler } from './handlers/other-error.handler';

@Module({
  providers: [
    ErrorService,
    AxiosErrorHandler,
    GenericErrorHandler,
    OtherErrorHandler,
  ],
  exports: [ErrorService],
})
class ErrorModule {}

export default ErrorModule;
