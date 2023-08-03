import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/createuser.dto';
import { User } from '@prisma/client';
import { SignInDto } from '../dto/signin.dto';

@Controller('users')
export class UsersController {
    constructor(private userService : UsersService) {}

    @Post('/signup')
    create(@Body()  createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Post('/signin')
    signin(@Body() signinUserDto: SignInDto) {
        return this.userService.signin(signinUserDto)
    }

    @Get()
    findAll(){
        return this.userService.findAll()
    }
    

}
