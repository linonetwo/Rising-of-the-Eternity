import 'reflect-metadata';
import { injectable, inject, Container } from 'inversify';

import { IService } from '@/services/types';
import { CDDADescriptions } from '@/services/Descriptions/CDDADescriptions';
import { MapGenerator } from '@/services/MapGenerator';

@injectable()
export class Main implements IService {
  @inject(CDDADescriptions) public readonly cdda!: CDDADescriptions;
  @inject(MapGenerator) public readonly mapGenerator!: MapGenerator;

  async init(): Promise<void> {
    await this.cdda.init();
    await this.mapGenerator.init();
  }
}

export const container = new Container();

container.bind<CDDADescriptions>(CDDADescriptions).toSelf();
container.bind<MapGenerator>(MapGenerator).toSelf();
container.bind<Main>(Main).toSelf();
