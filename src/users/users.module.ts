import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepository } from './repository/users.repository';
import { ProfilesModule } from 'src/profiles/profiles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UserRepository]
})
export class UsersModule {}
