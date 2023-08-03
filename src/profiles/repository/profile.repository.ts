import { Injectable } from '@nestjs/common';
import { ProfileDto } from '../profilesdto/profiles.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(createProfile: any){
        return await this.prisma.profile.create({
            data: createProfile
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
