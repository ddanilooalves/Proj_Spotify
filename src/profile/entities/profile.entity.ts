import { Music, User } from "@prisma/client";

export class Profile {
    id?: string;
    title: string;
    imageUrl: string;
    user?: User;
    musics?: Music;
}

