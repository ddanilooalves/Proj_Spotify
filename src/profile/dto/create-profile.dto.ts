import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do perfil',
    example: 'DaniloA',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Foto de perfil',
    example: 'https://avatars.githubusercontent.com/u/97993854?v=4',
  })
  imageUrl: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id do usuario para criação do perfil',
    example: '54f98cc6-3446-412a-aacc-9e283f4be734',
  })
  userId: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Id da musica do perfil',
    example: ['baaf5150-9feb-412b-b1d7-373a1c5503c5'],
  })
  musics: string[];
}
