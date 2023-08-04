import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/createuser.dto';
import { User } from '@prisma/client';
import { SignInDto } from '../dto/signin.dto';
import { AuthGuard } from '@nestjs/passport';

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

    @Get('/all')
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.OK)
    public async getuser(): Promise<User[]> {
        return this.userService.findAll()
    }

   
    

}
