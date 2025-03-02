import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { HealthResponseDto } from './health.dto';

const HealthApiTags = ApiTags('health');

const HealthCheckMetadata = {
  operation: ApiOperation({ summary: 'Health Check' }),

  okResponse: ApiOkResponse({
    description: 'Returns application health status.',
    type: HealthResponseDto,
    example: { success: true },
  }),
  invalidResponse: ApiBadRequestResponse({
    description: 'Health status failed',
    type: HealthResponseDto,
    example: { success: false },
  }),
};

export { HealthApiTags, HealthCheckMetadata };
