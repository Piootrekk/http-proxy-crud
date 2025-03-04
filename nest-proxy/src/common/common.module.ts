import { Module } from '@nestjs/common';
import ErrorModule from './error/error.module';
import { CommonService } from './common.service';

@Module({
  imports: [ErrorModule],
  providers: [CommonService],
  exports: [CommonService],
})
class CommonModule {}

export default CommonModule;
