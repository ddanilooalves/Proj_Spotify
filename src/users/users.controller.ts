import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Recebe uma requisição GET e retorna um objeto de status
   * da aplicação com a URL de documentação
   * @param req Objeto de Request do Express
   * @returns Objeto de status da aplicação
   */
  @Post()
  @ApiOperation({
    summary: 'Cria um novo usuario',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get()
  @ApiOperation({
    summary: 'Visualiza todos os usuarios',
  })
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({
    summary: 'Localiza o usuario por ID',
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um usuario por ID',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta um usuario por ID',
  })
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
