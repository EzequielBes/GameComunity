import { Profile } from "@prisma/client";
import { IsString } from "class-validator";

export class ProfileDto{
    @IsString()
    username: string
}