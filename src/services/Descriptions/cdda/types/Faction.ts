export interface IFaction {
  type: 'faction';
  id: string;
  name: string;
  likes_u: number;
  respects_u: number;
  known_by_u: boolean;
  size: number;
  power: number;
  food_supply: number;
  wealth: number;
  description: string;
  currency?: string;
  relations?: Relations;
  mon_faction?: string;
  epilogues?: Epilogue[];
  lone_wolf_faction?: boolean;
}

interface Epilogue {
  power_min?: number;
  id: string;
  power_max?: number;
}

interface Relations {
  lobby_beggars?: Lobbybeggars;
  free_merchants?: Lobbybeggars;
  old_guard?: Lobbybeggars;
  no_faction?: Nofaction;
  wasteland_scavengers?: Nofaction;
  tacoma_commune?: Tacomacommune;
  isherwood_family?: Isherwoodfamily;
  hells_raiders?: Hellsraiders;
  marloss?: Hellsraiders;
  your_followers?: Hellsraiders;
  amf?: Isherwoodfamily;
  robofac?: Isherwoodfamily;
  apis_hive?: Isherwoodfamily;
}

interface Hellsraiders {
  'kill on sight': boolean;
  'watch your back'?: boolean;
  'share my stuff'?: boolean;
  'guard your stuff'?: boolean;
  'lets you in'?: boolean;
  'defends your space'?: boolean;
  'knows your voice'?: boolean;
}

interface Isherwoodfamily {
  'kill on sight': boolean;
  'watch your back': boolean;
  'share my stuff': boolean;
  'guard your stuff': boolean;
  'lets you in': boolean;
  'defends your space': boolean;
  'knows your voice': boolean;
}

interface Tacomacommune {
  'kill on sight': boolean;
  'watch your back': boolean;
  'share my stuff': boolean;
  'guard your stuff': boolean;
  'lets you in': boolean;
  'defends your space': boolean;
  'knows your voice'?: boolean;
}

interface Nofaction {
  'kill on sight'?: boolean;
  'watch your back'?: boolean;
  'share my stuff'?: boolean;
  'guard your stuff'?: boolean;
  'lets you in'?: boolean;
  'defends your space'?: boolean;
  'knows your voice': boolean;
}

interface Lobbybeggars {
  'kill on sight'?: boolean;
  'watch your back'?: boolean;
  'share my stuff'?: boolean;
  'guard your stuff'?: boolean;
  'lets you in'?: boolean;
  'defends your space'?: boolean;
  'knows your voice'?: boolean;
}
