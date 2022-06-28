import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Danilo Alves'
  })
  name: string;

  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'daniloalves0512@gmail.com'
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Senha do usuário',
    example: 'danilo!2012'
  })
  password: string;

  @IsBoolean()
  @ApiProperty({
    description: 'Usuário administrador',
    example: true || false
  })
  isAdmin?: boolean;
}
