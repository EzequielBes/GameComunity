import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { ProfilesController } from './profiles/controller/profiles.controller';
import { ProfilesModule } from './profiles/profiles.module';
import { ProfilesService } from './profiles/service/profiles.service';

@Module({
  imports: [ConfigModule.forRoot(),UsersModule, ProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
