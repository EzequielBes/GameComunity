import { Get, Injectable, Post } from '@nestjs/common';
import { UserRepository } from '../repository/users.repository';
import { CreateUserDto } from '../dto/createuser.dto';
import { SignInDto } from '../dto/signin.dto';
import { TokenDecoded } from 'src/usecases/tokenDecode.usecase';

@Injectable()
export class UsersService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly tokenDecoded: TokenDecoded
        ){}
    
    create(createUserDto: CreateUserDto){
       return this.userRepository.create(createUserDto)
    }
    
    signin(signinUserDto: SignInDto) {
        return this.userRepository.signin(signinUserDto)
    }

    findAll(){
        return this.userRepository.find()
    }

    getToken(token) {
        return this.tokenDecoded.getToken(token)
    }
}
