import { Get, HttpException, Injectable, NotFoundException, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/createuser.dto';
import { UserEntity } from '../entity/users.entity';
import * as bcrypt from 'bcrypt'
import { SignInDto } from '../dto/signin.dto';
import { AuthService } from 'src/auth/auth/auth.service';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class UserRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly authService: AuthService,
        
        ){}
    saltRounds = 10;
    
    createHash(createUserDto, saltRounds) {
        return bcrypt.hashSync(createUserDto.password, saltRounds);
    }
    async create(createUserDto: CreateUserDto) {
       const users = createUserDto;

       if(users) {
        const isOnDataBase =await this.prisma.user.findUnique({
            where: {
                email: users.email
            }
        })
        if(!isOnDataBase  ) {
            const hash =  this.createHash(createUserDto, this.saltRounds)
            createUserDto.password = hash
            return await this.prisma.user.create({
                data: createUserDto
            })
        }
         throw new NotFoundException("Usuario ja existe")
       }
        
    }

    async signin(signin: SignInDto) {
        const user = await this.prisma.user.findUnique({where: {email: signin.email}})
        if(!user) throw new NotFoundException('Usuario não encontrado')
        
        const match = bcrypt.compare(signin.password, user.password)
        
        const access = {access_token: await this.authService.generateToken(user.id)}
         if(await match === false) {
            throw new NotFoundException('nao encontrado')
         } 
        return {emai: user.email, access}
    }

    async find(): Promise<UserEntity[]> {
        return this.prisma.user.findMany()
    }

    async busca(token) {
        return this.authService.decoded(token)
    }
}
