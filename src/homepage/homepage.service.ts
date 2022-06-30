import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomepageService {
  constructor(private readonly prisma: PrismaService) {}

  async findByGender(id: string) {
    const favorites = await this.prisma.profile.findUnique({
      where: {
        id,
      },
      select: {
        musics: true,
      },
    });

    const genres = await this.prisma.gender.findMany({
      select: {
        id: true,
        name: true,
        musics: true,
      },
    });

    return [{ favorites }, { genres }];
  }
}
