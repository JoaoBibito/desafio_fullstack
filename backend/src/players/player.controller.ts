import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common"
import { PlayerService } from "./players.service"
import { CreatePlayerDTO, UpdatePlayerDTO } from "./dto/players"

@Controller("players")
export class PlayerController {
  constructor(private readonly playerService: PlayerService) { }

  @Post()
  create(@Body() createPlayerDTO: CreatePlayerDTO) {
    return this.playerService.create(createPlayerDTO)
  }

  @Get()
  findall() {
    return this.playerService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.playerService.findOne(+id)
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updatePlayerDTO: UpdatePlayerDTO) {
    return this.playerService.update(+id, updatePlayerDTO)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.playerService.remove(+id)
  }
}