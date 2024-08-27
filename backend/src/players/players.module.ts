import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PlayerService } from "./players.service";
import { PlayerController } from "./player.controller";

@Module({
  imports: [],
  providers: [PrismaService, PlayerService],
  controllers: [PlayerController],
})

export class PlaysersModule { }
