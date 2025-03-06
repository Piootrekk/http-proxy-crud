import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import ProxyController from './proxy.controller';
import ProxyService from './proxy.sevice';
import { HttpModule } from '@nestjs/axios';
import CommonModule from 'src/common/common.module';

@Module({
  imports: [HttpModule, CommonModule],
  controllers: [ProxyController],
  providers: [ProxyService],
})
class ProxyModule {}

export default ProxyModule;
