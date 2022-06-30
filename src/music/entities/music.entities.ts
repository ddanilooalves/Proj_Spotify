import { Gender, Profile } from "@prisma/client";

export class Music {
    id?: string;
    title: string;
    coverImageUrl: string;
    Year: number;
    musicYouTubeUrl: string;
    genders?: Gender;
    profiles?: Profile;
}