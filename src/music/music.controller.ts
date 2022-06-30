import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from 'src/users/entities/user.entity';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { Music } from './entities/music.entities';
import { MusicService } from './music.service';

@ApiTags('musics')
@Controller('musics')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos as musicas',
  })
  findAll() {
    return this.musicService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar musica por ID',
  })
  findOne(@Param('id') id: string): Promise<Music> {
    return this.musicService.findOne(id);
  }

  @Post('create-music')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Criar uma nova musica',
  })
  create(@LoggedUser() user: User, @Body() dto: CreateMusicDto) {
    return this.musicService.create(user, dto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Editar uma musica pelo ID',
  })
  update(@LoggedUser() user: User, @Param('id') id: string, @Body() dto: UpdateMusicDto): Promise<Music> {
    return this.musicService.update(user, id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar uma musica pelo ID',
  })
  delete(@LoggedUser() user: User, @Param('id') id: string) {
    this.musicService.delete(user, id);
  }
}
