import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { userInfo } from 'os';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/users/entities/user.entity';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { Music } from './entities/music.entities';

@Injectable()
export class MusicService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Music[]> {
    return this.prisma.music.findMany();
  }

  async findById(id: string): Promise<Music> {
    const record = await this.prisma.music.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }

  async findOne(id: string): Promise<Music> {
    return await this.findById(id);
  }

  create(user: User, dto: CreateMusicDto) {
    if (!user.isAdmin) {
      throw new UnauthorizedException('Usuario não autenticado');
    }

    const data: Prisma.MusicCreateInput = {
      ...dto,
      genders: {
        connect: dto.genders.map((genderId) => ({
          id: genderId,
        })),
      },
    };

    return this.prisma.music
      .create({
        data,
        select: {
          title: true,
          id: true,
          genders: {
            select: {
              name: true,
            },
          },
        },
      })
      .catch(this.handleError);
  }

  async update(user: User, id: string, dto: UpdateMusicDto): Promise<Music> {
    if (!user.isAdmin) {
      throw new UnauthorizedException('Usuario não autenticado');
    }

    await this.findById(id);

    const data: Partial<Prisma.MusicCreateInput> = {
      ...dto,
      genders: {
        connect: dto.genders.map((genderId) => ({
          id: genderId,
        })),
      },
    };

    return this.prisma.music
      .update({
        where: { id },
        data,
      })
      .catch(this.handleError);
  }
  async delete(user: User, id: string) {
    if (!user.isAdmin) {
      throw new UnauthorizedException('Usuario não autenticado');
    }

    await this.findById(id);
    await this.prisma.music.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLines = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(
      lastErrorLines || 'Algum erro ocorreu ao executar a operação',
    );
  }
}
