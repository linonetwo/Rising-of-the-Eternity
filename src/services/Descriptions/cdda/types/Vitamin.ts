export interface IVitamin {
  id: string;
  type: 'vitamin';
  vit_type: string;
  name: Name;
  deficiency?: string;
  min: number;
  rate: string;
  disease?: number[][];
  excess?: string;
  max?: number;
  disease_excess?: number[][];
  flags?: string[];
}

interface Name {
  str: string;
}
