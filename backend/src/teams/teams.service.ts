import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTeamDTO, UpdateTeamDTO } from "./dto/teams";

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) { }

  async create(createTeamDTO: CreateTeamDTO) {
    return this.prisma.team.create({ data: createTeamDTO })
  }

  async findAll() {
    return this.prisma.team.findMany()
  }

  async findOne(id: number) {
    return this.prisma.team.findUnique({ where: { id } })
  }

  async update(id: number, updateTeamDTO: UpdateTeamDTO) {
    return this.prisma.team.update({
      where: { id },
      data: updateTeamDTO
    })
  }

  async remove(id: number) {
    return this.prisma.team.delete({ where: { id } })
  }
}