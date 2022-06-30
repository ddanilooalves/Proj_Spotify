import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { PrismaModule } from "src/prisma/prisma.module";
import { MusicController } from "./music.controller";
import { MusicService } from "./music.service";

@Module({
    imports: [PrismaModule, PassportModule.register({
        defaultStrategy: 'jwt'
      })],
    controllers: [MusicController],
    providers: [MusicService],
})
export class MusicModule {}