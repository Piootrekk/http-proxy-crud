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

const SwaggerProxyApiTags = ApiTags('proxy');

const SwaggerProxyMetadata = {
  operationGet: ApiOperation({ summary: 'Proxy GET' }),
  operationPost: ApiOperation({ summary: 'Proxy POST' }),
  operationPut: ApiOperation({ summary: 'Proxy PUT' }),
  operationPatch: ApiOperation({ summary: 'Proxy PATCH' }),
  operationDelete: ApiOperation({ summary: 'Proxy DELETE' }),

  params: ApiParam({
    name: 'path',
    type: String,
    description: 'Provide URL to fetch data',
    required: true,
    allowReserved: true,
  }),

  body: ApiBody({
    type: ProxyBodyDto,
  }),

  okResponse: ApiOkResponse({
    description: 'Returns data from url',
    type: ProxyResponseDto,
    example: { example: 'yes' },
  }),
  errorResponse: ApiBadRequestResponse({
    description: 'Error schema request/response proxy',
    type: ProxyErrorDto,
  }),
  errorServer: ApiInternalServerErrorResponse({
    description: 'Error schema internal server proxy',
    type: ProxyErrorDto,
  }),
};

export { SwaggerProxyApiTags, SwaggerProxyMetadata };
