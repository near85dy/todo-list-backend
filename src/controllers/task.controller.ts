import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from 'src/services/task.service';

@Controller('tasks')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get()
    async getAllTasks()
    {
        return await this.taskService.getAllTasks();
    }
    
    @Post()
    async createTask(@Body() body)
    {
        return await this.taskService.createTask(body);
    }

    @Put(':id')
    async updateTask(@Param('id') id: string, @Body() body)
    {
        return await this.taskService.updateTask(id, body);
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string)
    {
        return await this.taskService.deleteTask(id);
    }
}
