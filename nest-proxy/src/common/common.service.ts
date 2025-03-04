import { Injectable } from '@nestjs/common';
import ErrorService from './error/error.service';

@Injectable()
class CommonService {
  private readonly _errorService: ErrorService;
  constructor(errorService: ErrorService) {
    this._errorService = errorService;
  }

  get errorService(): ErrorService {
    return this._errorService;
  }
}

export { CommonService };
