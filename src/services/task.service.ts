import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class TaskService {
  constructor(private prismaService: PrismaService) {}

  async getUserTasks() {
    return await this.prismaService.task.findMany();
  }

  async createTask(title: string, description: string, userId: string) {
    return await this.prismaService.task.create({
      data: { title, description, userId },
    });
  }

  async updateTask(id: string, task: { title: string; description: string }) {
    return await this.prismaService.task.update({ where: { id }, data: task });
  }

  async deleteTask(id: string) {
    return await this.prismaService.task.delete({ where: { id } });
  }
}
