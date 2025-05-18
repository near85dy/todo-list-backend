import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async createUser({ username, password }) {
    return await this.prismaService.user.create({
      data: { username, password },
    });
  }

  async getUserById(id: string) {
    return await this.prismaService.user.findFirst({ where: { id } });
  }

  async getUserByUsername(username: string) {
    return await this.prismaService.user.findFirst({ where: { username } });
  }
}
