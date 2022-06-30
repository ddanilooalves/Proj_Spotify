import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateMusicDto {
  @IsString()
  @ApiProperty({
    description: 'Uma nova musica',
    example: 'Poetas no topo',
  })
  title: string;

  @IsUrl()
  @IsString()
  @ApiProperty({
    description: 'Imagem da musica/album',
    example: 'colocar',
  })
  coverImageUrl: string;

  @IsNumber()
  @ApiProperty({
    description: 'Ano de lançamento',
    example: 2020,
  })
  Year: number;

  @IsUrl()
  @IsString()
  @ApiProperty({
    description: 'Musica:  ',
    example:
      'https://studiosol-a.akamaihd.net/tb/letras-blog/wp-content/uploads/2019/08/54b6a78-poetas-no-topo.png',
  })
  musicYouTubeUrl: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'ID do genero das musicas',
    example: ['c5b1706c-11d3-480f-bfe8-4c1f22af885a'],
  })
  genders: string[];
}
