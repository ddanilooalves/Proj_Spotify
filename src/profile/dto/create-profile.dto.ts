import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl, IsUUID } from "class-validator";

export class CreateProfileDto {
    @IsString()
    @ApiProperty({
        description: 'Nome do perfil',
        example: "AlexF"
    })
    title: string;

    @IsUrl()
    @ApiProperty({
        description: "Foto de perfil",
        example: "https://avatars.githubusercontent.com/u/97993854?v=4"
    })
    imageUrl: string;

    @IsUUID()
    @ApiProperty({
        description: "Id do usuario para criação do perfil",
        example: 'colocar'
    })
    userId: string;

    @IsUUID(undefined, {each: true})
    @ApiProperty({
        description: "Id da musica do perfil",
        example: ['colocar']
    })
    musics: string[];
}