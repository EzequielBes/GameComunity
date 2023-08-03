import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../users/service/users.service';
import { Injectable } from "@nestjs/common";


@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
    ){}

    
}