import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy, ExtractJwt} from 'passport-jwt'
import { AuthService } from "../auth.service";
import * as jwt from 'jsonwebtoken'


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService : AuthService ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET
        })
    }
    async validate(payload: any) {
        const isValidUser = await this.authService.validateUser(payload.sub);
        if(!isValidUser) {
            throw new UnauthorizedException();
        }
        return payload
    } 
    async decoded(payload) {
        const token = payload;
        const secretkey = process.env.JWT_SECRET

        try {
            const decodedToken = jwt.verify(token, secretkey)
            return decodedToken
        } catch {
            
        }
    }    
}