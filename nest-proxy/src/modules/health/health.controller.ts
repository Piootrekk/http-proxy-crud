import { Controller, Get } from '@nestjs/common';
import { HealthApiTags, HealthCheckMetadata } from './health.swagger';
import { HealthResponseDto } from './health.dto';

@Controller('health')
@HealthApiTags
class HealthController {
  @Get()
  @HealthCheckMetadata.operation
  @HealthCheckMetadata.okResponse
  @HealthCheckMetadata.invalidResponse
  gethealth(): HealthResponseDto {
    return { health: true };
  }
}

export default HealthController;
