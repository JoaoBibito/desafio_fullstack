import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlayerDTO, UpdatePlayerDTO } from './dto/players';

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) { };

  async create(createPlayerDTO: CreatePlayerDTO) {
    return this.prisma.player.create({ data: createPlayerDTO })
  }

  async findAll() {
    return this.prisma.player.findMany({
      include: {
        Team: {
          select: {
            name: true
          }
        }
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.player.findUnique({ where: { id } });
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDTO) {
    return this.prisma.player.update({
      where: { id },
      data: updatePlayerDto,
    });
  }

  async remove(id: number) {
    return this.prisma.player.delete({ where: { id } });
  }

}
