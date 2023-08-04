import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { ProfilesController } from './profiles/controller/profiles.controller';
import { ProfilesModule } from './profiles/profiles.module';
import { ProfilesService } from './profiles/service/profiles.service';
import { AuthService } from './auth/auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';



@Module({
  imports: [ConfigModule.forRoot(),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
