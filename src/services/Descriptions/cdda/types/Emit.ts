export interface IEmit {
  id: string;
  type: 'emit';
  '//'?: string;
  field: string;
  intensity?: number;
  chance?: number;
  qty?: number;
}
