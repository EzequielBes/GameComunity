import { Profile } from "@prisma/client";

export class ProfilesEntity implements Profile{
    username: string;
    userId: string;
    gameTagsId: string;
    createdAt: Date;
    updatedAt: Date;
}