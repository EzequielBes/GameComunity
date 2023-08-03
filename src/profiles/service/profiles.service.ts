import { Injectable } from '@nestjs/common';
import { ProfileDto } from '../profilesdto/profiles.dto';
import { ProfileRepository } from '../repository/profile.repository';

@Injectable()
export class ProfilesService {
    constructor(private readonly profileRepository: ProfileRepository) {}

    create(createProfile: ProfileDto){
        return this.profileRepository.create(createProfile)
    }

    findAll() {
        return this.profileRepository.findAll()
    }
}
