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
                },
                include: {
                    friends: true
                }
            },
        )}
            
    async findAll() {
        return this.prisma.profile.findMany()
    }

}
