import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ProxyErrorDto, ProxyResponseDto } from './proxy.dto';

const ProxyApiTags = ApiTags('proxy');

const GetProxyCheckMetadata = {
  operation: ApiOperation({ summary: 'Proxy GET' }),
  params: ApiParam({
    name: 'path',
    type: String,
    description: 'Provide URL to fetch data',
    required: true,
  }),

  okResponse: ApiOkResponse({
    description: 'Returns data from url',
    type: ProxyResponseDto,
    example: { example: 'yes' },
  }),
  invalidResponse: ApiBadRequestResponse({
    description: 'Error schema proxy',
    type: ProxyErrorDto,
  }),
};

export { ProxyApiTags, GetProxyCheckMetadata };
