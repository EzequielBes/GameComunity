import { Module } from '@nestjs/common';
import { InviteController } from './invite.controller';
import { InviteRepository } from './invite.repository';
import { InviteService } from './invite.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenDecoded } from 'src/usecases/tokenDecode.usecase';
import { AuthService } from 'src/auth/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
    providers: [InviteRepository, InviteService, PrismaService, TokenDecoded, AuthService, JwtService],
    controllers: [InviteController]
})
export class InviteModule {}
