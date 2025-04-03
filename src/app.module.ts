import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './controllers/task.controller';
import { TaskService } from './services/task.service';
import { TaskModule } from './modules/task.module';
import { PrismaModule } from './modules/prisma.module';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
