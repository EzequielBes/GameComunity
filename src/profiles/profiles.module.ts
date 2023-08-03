import { Module } from '@nestjs/common';
import { ProfilesService } from './service/profiles.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfilesController } from './controller/profiles.controller';
import { ProfileRepository } from './repository/profile.repository';

@Module({
    controllers: [ProfilesController],
   
    providers: [PrismaService,ProfilesService, ProfileRepository]
    
})
export class ProfilesModule {}
