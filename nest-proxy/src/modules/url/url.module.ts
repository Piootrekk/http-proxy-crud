import { Module } from '@nestjs/common';
import UrlComponent from './url.controller';
import UrlService from './url.sevice';

@Module({
  controllers: [UrlComponent],
  providers: [UrlService],
})
class UrlModule {}

export default UrlModule;
