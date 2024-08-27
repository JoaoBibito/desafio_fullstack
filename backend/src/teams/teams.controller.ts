import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common"
import { TeamService } from "./teams.service"
import { CreateTeamDTO, UpdateTeamDTO } from "./dto/teams"

@Controller("teams")
export class TeamsController {
  constructor(private readonly teamService: TeamService) { }

  @Post()
  create(@Body() createTeamDTO: CreateTeamDTO) {
    return this.teamService.create(createTeamDTO)
  }

  @Get()
  findAll() {
    return this.teamService.findAll()
  }

  @Get(":id")
  findOnde(@Param(":id") id: string) {
    return this.teamService.findOne(+id)
  }

  @Put(":id")
  update(@Param(":id") id: string, @Body() updateTeamDTO: UpdateTeamDTO) {
    return this.teamService.update(+id, updateTeamDTO)
  }

  @Delete(":id")
  remove(@Param(":id") id: string) {
    return this.teamService.remove(+id)
  }
}
