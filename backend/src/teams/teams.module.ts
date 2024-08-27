import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { TeamService } from "./teams.service";
import { TeamsController } from "./teams.controller";

@Module({
  imports: [],
  providers: [PrismaService, TeamService],
  controllers: [TeamsController],
})

export class TeamsModule { }