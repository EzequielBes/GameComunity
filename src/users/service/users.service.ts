import { Get, Injectable, Post } from '@nestjs/common';
import { UserRepository } from '../repository/users.repository';
import { CreateUserDto } from '../dto/createuser.dto';
import { SignInDto } from '../dto/signin.dto';

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UserRepository ){}
    
    create(createUserDto: CreateUserDto){
       return this.userRepository.create(createUserDto)
    }
    
    signin(signinUserDto: SignInDto) {
        return this.userRepository.signin(signinUserDto)
    }

    findAll(){
        return this.userRepository.find()
    }
}
