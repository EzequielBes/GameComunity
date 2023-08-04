import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy, ExtractJwt} from 'passport-jwt'
import { AuthService } from "../auth.service";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService : AuthService ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretKey: process.env.JWT_SECRET
        })
    }
    async validate(payload: any) {
        const isValidUser = await this.authService.validateUser(payload.sub);
        if(!isValidUser) {
            throw new UnauthorizedException();
        }
        return payload
    }     
}