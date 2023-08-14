import { Controller, Get, Post, Request } from '@nestjs/common';

import { InviteService } from './invite.service';
import {Request as Req} from 'express';
import { TokenDecoded } from 'src/usecases/tokenDecode.usecase';

@Controller('invite')
export class InviteController {
    constructor(
        private readonly inviteService: InviteService,
        private readonly tokenDecoded: TokenDecoded
    ) {}

    @Get('user/:username')
    getUser(@Request() req:Req){
        const username = req.params.username
        return this.inviteService.getFriend(username)
    }
    @Post('user/adicionar/:username')
    async addFriend(@Request() req: Req) {
        const username = req.params.username
        const token = await this.tokenDecoded.getToken(req)
        return this.inviteService.addFriend(username, token)
    }

}
