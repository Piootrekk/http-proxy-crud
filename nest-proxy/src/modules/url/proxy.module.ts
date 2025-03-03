import { Module } from '@nestjs/common';
import ProxyController from './proxy.controller';
import ProxyService from './proxy.sevice';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ProxyController],
  providers: [ProxyService],
})
class ProxyModule {}

export default ProxyModule;
