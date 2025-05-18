import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TaskService } from 'src/services/task.service';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getUserTasks(@Req() req) {
    return await this.taskService.getUserTasks();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createTask(@Body() body, @Req() req) {
    return await this.taskService.createTask(
      body.title,
      body.description,
      req.user,
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() body) {
    return await this.taskService.updateTask(id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return await this.taskService.deleteTask(id);
  }
}
