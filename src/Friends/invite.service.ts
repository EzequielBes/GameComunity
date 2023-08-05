import { Injectable } from '@nestjs/common';
import { AddFriend } from './entity/addFriend.entity';
import { InviteRepository } from './invite.repository';

@Injectable()
export class InviteService {
    constructor(
        private readonly  inviteRepository: InviteRepository
    ) {}

    getFriend(username, token) {
        return this.inviteRepository.getFriend(username)
    }

    addFriend(username, token) {
        return this.inviteRepository.addFriend(username, token)
    }
    
}
