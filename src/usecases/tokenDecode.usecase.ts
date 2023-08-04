import { Injectable } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "src/auth/auth/auth.service";

@Injectable()
export class TokenDecoded {
    constructor(
        private readonly authService: AuthService
    ) {}

    getToken(req: Request) {
        const token = req.headers.authorization
        return this.authService.decoded(token)
    }
}