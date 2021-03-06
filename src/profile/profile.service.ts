import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  async findById(id: string): Promise<Profile> {
    const record = await this.prisma.profile.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }

  async findOne(id: string): Promise<Profile> {
    return this.findById(id);
  }

  async create(dto: CreateProfileDto): Promise<Profile> {
    const data: Prisma.ProfileCreateInput = {
      title: dto.title,
      imageUrl: dto.imageUrl,
      user: {
        connect: {
          id: dto.userId,
        },
      },
      musics: {
        connect: dto.musics.map((musicId) => ({
          id: musicId,
        })),
      },
    };

    return await this.prisma.profile.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateProfileDto): Promise<Profile> {
    await this.findById(id);

    const data: Partial<Prisma.ProfileCreateInput> = {
      user: {
        connect: {
          id: dto.userId,
        },
      },
      ...dto,
      musics: {
        connect: dto.musics.map((musicId) => ({
          id: musicId,
        })),
      },
    };

    return this.prisma.profile
      .update({
        where: { id },
        data,
      })
      .catch(this.handleError);
  }
  async delete(id: string) {
    await this.findById(id);
    await this.prisma.profile.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLines = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(
      lastErrorLines || 'Algum erro ocorreu ao executar a operação',
    );
  }
}
