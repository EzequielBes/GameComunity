import { ProfilesEntity } from '../entity/profiles.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';

import { ProfileDto } from '../profilesdto/profiles.dto';
import { ProfilesService } from '../service/profiles.service';

@Controller('profiles')
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService){}

    @Post()
    create(@Body() createProfile: ProfileDto){
        this.profilesService.create(createProfile)
    }

    @Get()
    findAll(): Promise<ProfilesEntity[]> {
        return this.profilesService.findAll()
    }
}
