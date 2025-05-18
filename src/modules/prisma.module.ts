import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { AuthModule } from './auth.module';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [],
})
export class PrismaModule {}
