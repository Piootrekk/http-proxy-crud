import { Controller, Get } from '@nestjs/common';
import { HealthApiTags, HeathSwagger } from './health.swagger';
import { HealthResponseDto } from './health.dto';

@Controller('health')
@HealthApiTags
class HealthController {
  @Get()
  @HeathSwagger()
  gethealth(): HealthResponseDto {
    return { health: true };
  }
}

export default HealthController;
