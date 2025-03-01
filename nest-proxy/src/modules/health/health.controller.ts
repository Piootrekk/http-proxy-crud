import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('health')
@ApiTags('health')
class HealthController {
  @Get()
  @ApiOperation({ summary: 'Health Check' })
  @ApiResponse({
    status: 200,
    description: 'Returns application health status.',
  })
  gethealth() {
    return { health: true };
  }
}

export default HealthController;
