export interface ISpeech {
  type: 'speech';
  speaker: string[] | string;
  sound: string;
  volume: number;
  '//hat tip'?: string;
}
