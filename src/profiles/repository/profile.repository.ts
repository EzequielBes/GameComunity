import { Injectable } from '@nestjs/common';
import { ProfileDto } from '../profilesdto/profiles.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileRepository {
    constructor(
        private readonly prisma: PrismaService) {}

    
     async create(createProfile: any, token:any){
        
        this.prisma.user.findUnique({
            where: {
                id: token
            }
        })
        return this.prisma.profile.create({
            data: {
                username: createProfile.username,
                user: {
                    connect: {
                        id: token
                    }
                },
                gameTags: {
                    create: {
                        name: 'csgo',
                        description: 'O maior jogo de fps tatico do mundo',
                        gender: 'fps'
                    }
                }
            }
        })

    }

   

    async findAll() {
        return await this.prisma.profile.findMany({
            include: {
                user: true,
                gameTags: true,
                friend: true,
            }
        })
    }

}
