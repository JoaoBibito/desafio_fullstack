export class CreatePlayerDTO {
  name: string;
  age: number;
  team_id: number;
}

export class UpdatePlayerDTO {
  name?: string;
  age?: number;
  team_id?: number
}

