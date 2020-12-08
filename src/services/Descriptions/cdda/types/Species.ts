export interface ISpecies {
  type: 'SPECIES';
  id: string;
  description?: string;
  fear_triggers?: string[];
  footsteps?: string;
  anger_triggers?: string[];
  '//'?: string;
}
