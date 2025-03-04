type TErrorResponse = {
  status: number;
  message: string;
  type: string;
};

type IErrorHandler = {
  canHandle(error: unknown): boolean;
  handle(error: unknown): TErrorResponse;
};

export { TErrorResponse, IErrorHandler };
