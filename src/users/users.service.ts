import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const data: User = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
    };

    return this.prisma.user
      .create({
        data,
        select: {
        name: true,
        email: true,
        isAdmin: true,
        password: false,
        },
      });
  }

  async findAll() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        isAdmin: true,
        password: false,
        },
      });
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({ where: {
      id,
  }});
  }

  async update(id: string, dto: UpdateUserDto) {
    const data: Partial<User> = { ...dto };
    return this.prisma.user.update({
      where: { id },
      data,
      select: {
        name: true,
        email: true,
        isAdmin: true,
        password: false,
        },
    });
  }

  async delete(id: string) {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return { message: 'User successfully deleted' };
  }
}