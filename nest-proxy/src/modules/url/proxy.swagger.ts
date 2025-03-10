import {
  ApiBadRequestResponse,
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ProxyBodyDto, ProxyErrorDto, ProxyResponseDto } from './proxy.dto';
import { applyDecorators } from '@nestjs/common';

enum EnumMethods {
  'GET' = 'PROXY GET',
  'POST' = 'PROXY POST',
  'PUT' = 'PROXY PUT',
  'PATCH' = 'PROXY PATCH',
  'DELETE' = 'PROXY DELETE',
}

type TMethod = keyof typeof EnumMethods;

const SwaggerProxyApiTags = ApiTags('proxy');

const ProxySwagger = (method: TMethod) => {
  const isUsingBody =
    method === 'PATCH' || method === 'PUT' || method === 'POST';
  const decorators = [
    ApiOperation({ summary: EnumMethods[method] }),
    ApiParam({
      name: 'path',
      type: String,
      description: 'Provide URL to fetch data',
      required: true,
      allowReserved: true,
    }),
    ApiOkResponse({
      description: 'Returns data from URL',
      type: ProxyResponseDto,
      example: { example: 'yes' },
    }),
    ApiBadRequestResponse({
      description: 'Error schema request/response proxy',
      type: ProxyErrorDto,
    }),
    ApiInternalServerErrorResponse({
      description: 'Error schema internal server proxy',
      type: ProxyErrorDto,
    }),
  ];

  if (isUsingBody) {
    decorators.push(
      ApiBody({
        type: ProxyBodyDto,
      }),
    );
  }

  return applyDecorators(...decorators);
};

export { SwaggerProxyApiTags, ProxySwagger };
