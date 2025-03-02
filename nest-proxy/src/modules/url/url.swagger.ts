import { ApiOperation, ApiTags } from '@nestjs/swagger';

const ProxyApiTags = ApiTags('proxy');

const GetProxyCheckMetadata = {
  operation: ApiOperation({ summary: 'Proxy GET' }),
};

export { ProxyApiTags, GetProxyCheckMetadata };
