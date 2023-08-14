import { ProfilesEntity } from '../entity/profiles.entity';
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { ProfileDto } from '../profilesdto/profiles.dto';
import { ProfilesService } from '../service/profiles.service';
import { TokenDecoded } from 'src/usecases/tokenDecode.usecase';
import { JwtAuthGuard } from 'src/auth/auth/auth.guard';



@Controller('profiles')
export class ProfilesController {
    constructor(
        private readonly profilesService: ProfilesService,
        private readonly tokenDecoded: TokenDecoded,
          
    ){}

    @Post('create')
    @UseGuards(JwtAuthGuard)
         async create(@Body() creatProfile: ProfileDto, @Request() req ){
        const token = await this.tokenDecoded.getToken(req)
        return this.profilesService.create(creatProfile, token)
    }

    @Get()
    findAll() {
        return this.profilesService.findAll()
    }

    
}
