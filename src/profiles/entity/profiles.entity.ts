import { Profile } from "@prisma/client";

export class ProfilesEntity implements Profile{
    id: string;
    profilesGamesId: string;
    username: string;
    userId: string;
    gameTagsId: string;
    createdAt: Date;
    updatedAt: Date;
}