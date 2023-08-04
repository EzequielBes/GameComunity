import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepository } from './repository/users.repository';
import { ProfilesModule } from 'src/profiles/profiles.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth/auth.service';
import { JwtStrategy } from 'src/auth/auth/strategy/jwt.strategy';
import { TokenDecoded } from 'src/usecases/tokenDecode.usecase';

@Module({
  imports: [  PassportModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn: process.env.JWT_EXPIRATION}
  }) ],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UserRepository,AuthService, JwtStrategy, TokenDecoded ]
})
export class UsersModule {}
