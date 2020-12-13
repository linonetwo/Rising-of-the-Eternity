import { injectable, inject } from 'inversify';

import { IService } from '@/services/types';
import { CDDADescriptions } from '@/services/Descriptions/CDDADescriptions';

@injectable()
export class MapGenerator implements IService {
  @inject(CDDADescriptions) private readonly cdda!: CDDADescriptions;

  async init(): Promise<void> {
    // do nothing
  }
}
