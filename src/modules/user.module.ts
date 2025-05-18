import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { UserService } from 'src/services/user.service';

@Module({
  imports: [PrismaModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
