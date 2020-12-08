export interface IAmmoEffect {
  id: string;
  type: 'ammo_effect';
  aoe?: Aoe;
  explosion?: Explosion;
  do_flashbang?: boolean;
  do_emp_blast?: boolean;
  trail?: Trail;
  '//'?: string;
  foamcrete_build?: boolean;
}

interface Trail {
  field_type: string;
  intensity_min: number;
  intensity_max: number;
  chance?: number;
}

interface Explosion {
  power: number;
  distance_factor?: number;
  fire?: boolean;
  shrapnel?: Shrapnel;
}

interface Shrapnel {
  casing_mass: number;
  fragment_mass: number;
  recovery?: number;
  drop?: string;
}

interface Aoe {
  field_type: string;
  intensity_min: number;
  intensity_max: number;
  radius?: number;
  radius_z?: number;
  chance?: number;
  size?: number;
  check_passable?: boolean;
  check_sees?: boolean;
  check_sees_radius?: number;
}
