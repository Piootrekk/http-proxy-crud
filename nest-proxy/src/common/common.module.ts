import { Module } from '@nestjs/common';
import ErrorModule from './error/error.module';

@Module({
  imports: [ErrorModule],
})
class CommonModule {}

export default CommonModule;
