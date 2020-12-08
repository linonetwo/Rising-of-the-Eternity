export interface IMigration {
  id: string[] | string;
  type: 'MIGRATION';
  replace: string;
  flags?: string[];
  charges?: number;
  contents?: Content[];
  sealed?: boolean;
}

interface Content {
  id: string;
  count: number;
}
