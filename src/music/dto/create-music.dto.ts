import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateMusicDto {
  @IsString()
  @ApiProperty({
    description: 'Uma nova musica',
    example: "Poetas no topo"
  })
  title: string;

  @IsUrl()
  @IsString()
  @ApiProperty({
    description: 'Imagem da musica/album',
    example: "colocar"
  })
  coverImageUrl: string;

  @IsNumber()
  @ApiProperty({
    description: 'Ano de lançamento',
    example: 2020
  })
  Year: number;

  @IsUrl()
  @IsString()
  @ApiProperty({
    description: "Musica:  ",
    example: "colocar"
  })
  musicYouTubeUrl: string;

  @IsUUID(undefined, {each: true})
  @ApiProperty({
    description: "ID do genero de jogos",
    example: ['colocar']
  })
  genders: string[];
}