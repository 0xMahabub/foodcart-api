import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ApiController } from './api.controller';

@Module({
  imports: [UserModule],
  controllers: [ApiController],
})
export class ApiModule {}
