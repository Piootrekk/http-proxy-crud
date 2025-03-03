import { Module } from '@nestjs/common';
import HealthModule from './health/health.module';
import ProxyModule from './url/proxy.module';

@Module({
  imports: [HealthModule, ProxyModule],
})
class AppModule {}

export default AppModule;
