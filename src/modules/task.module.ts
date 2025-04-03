import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { TaskService } from 'src/services/task.service';
import { PrismaModule } from './prisma.module';
import { TaskController } from 'src/controllers/task.controller';

@Module({
    imports: [PrismaModule],
    providers: [TaskService],
    controllers: [TaskController]
})
export class TaskModule {}
