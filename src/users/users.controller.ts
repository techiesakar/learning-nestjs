import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    @Get() // GET /users
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'DEVELOPER') {
        return this.userService.findAll(role)
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id)
    }

    @Post() // POST /users
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDTO) {
        return this.userService.update(id, updateUserDto)
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.userService.delete(id)
    }

}
