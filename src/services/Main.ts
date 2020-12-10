import { injectable, inject, named } from 'inversify';

import { IService } from '@/services/types';
import { IDescriptionStore } from '@/services/Descriptions/types';
import SERVICE_IDENTIFIER from '@/services/identifiers';
import TAG from '@/services/tags';

export interface IElectronMainThreadService extends IService {}

@injectable()
export class Main implements IElectronMainThreadService {
  @inject(SERVICE_IDENTIFIER.DescriptionStore) @named(TAG.CDDA) public cdda!: IDescriptionStore;

  async init(): Promise<void> {
    await this.cdda.init();
  }
}
