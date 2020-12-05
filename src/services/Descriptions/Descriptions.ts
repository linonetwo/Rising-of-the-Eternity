import Gun from 'gun/gun';
import fs from 'fs-extra';

import { IGun } from './types';

export interface IDescriptionStore {
  fromDirectory: (directoryPath: string) => Promise<IGun>;
}

export class Descriptions implements IDescriptionStore {
  gun: IGun;

  constructor() {
    this.gun = Gun();
  }

  async fromDirectory(directoryPath: string): Promise<IGun> {
    const childPathNames = await fs.readdir(directoryPath);
    return this.gun;
  }
}
