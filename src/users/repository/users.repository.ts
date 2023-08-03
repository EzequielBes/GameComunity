import { Get, Injectable, NotFoundException, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/createuser.dto';
import { UserEntity } from '../entity/users.entity';
import * as bcrypt from 'bcrypt'
import { SignInDto } from '../dto/signin.dto';

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService){}
    saltRounds = 10;
    hash;
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
        return "Usuario ja"
       }
        
    }

    async signin(signin: SignInDto) {
        const user = signin.email
        const isInDatabase = await this.prisma.user.findUnique({
            where: {
                email: user
            }
        })
        if(!isInDatabase) {
            throw new NotFoundException('Usuario não encontrado')
        }
        const match = bcrypt.compareSync(signin.password, this.createHash(signin, 10))
        if(!match) {
            throw new NotFoundException('Password not found')
        }
        return match
    }

    async find(): Promise<UserEntity[]> {
        return this.prisma.user.findMany()
    }
}
