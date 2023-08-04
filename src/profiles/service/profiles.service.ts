import { Injectable } from '@nestjs/common';
import { ProfileDto } from '../profilesdto/profiles.dto';
import { ProfileRepository } from '../repository/profile.repository';

@Injectable()
export class ProfilesService {
    constructor(private readonly profileRepository: ProfileRepository) {}

    create(createProfile: ProfileDto, token){
        return this.profileRepository.create(createProfile, token)
    }

    findAll() {
        return this.profileRepository.findAll()
    }
}
