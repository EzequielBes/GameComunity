import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class InviteRepository {
    constructor(
        private readonly prisma : PrismaService
    ){}

    getFriend(username) {
        
        const user = this.prisma.profile.findUnique({
            where: {
                username: username
            }
        })
        return user

    }

    async addFriend(username: string, token:any) {
        
     const user = await this.prisma.profile.findFirst({
        where: {
            userId: token
        }
     })
    
       
    }
}
