import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PlaysersModule } from './players/players.module';
import { AppService } from './app.service';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [PlaysersModule, TeamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
