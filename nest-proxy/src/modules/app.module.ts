import { Module } from '@nestjs/common';
import HealthModule from './health/health.module';
import UrlModule from './url/url.module';

@Module({
  imports: [HealthModule, UrlModule],
})
class AppModule {}

export default AppModule;
