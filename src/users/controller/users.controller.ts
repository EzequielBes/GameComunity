import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/createuser.dto';
import { User } from '@prisma/client';
import { SignInDto } from '../dto/signin.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/auth/auth.guard';



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
    @UseGuards(JwtAuthGuard)
    getuser() {
        return this.userService.findAll()
        
    }
    @Get('/logado')
    @UseGuards(JwtAuthGuard)
    busca(@Request() req) {
        const token = req.headers.authorization
        
        return this.userService.busca(token)
    }

   
    

}
