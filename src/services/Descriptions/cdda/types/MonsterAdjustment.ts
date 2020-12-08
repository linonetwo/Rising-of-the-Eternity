export interface IMonsterAdjustment {
  type: 'monster_adjustment';
  species: string;
  flag: Flag;
}

interface Flag {
  name: string;
  value: boolean;
}
