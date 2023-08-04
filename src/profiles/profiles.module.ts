import { Module } from '@nestjs/common';
import { ProfilesService } from './service/profiles.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfilesController } from './controller/profiles.controller';
import { ProfileRepository } from './repository/profile.repository';
import { TokenDecoded } from 'src/usecases/tokenDecode.usecase';
import { AuthService } from 'src/auth/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
    controllers: [ProfilesController],
   
    providers: [PrismaService,ProfilesService, ProfileRepository, TokenDecoded, AuthService, JwtService]
    
})
export class ProfilesModule {}
