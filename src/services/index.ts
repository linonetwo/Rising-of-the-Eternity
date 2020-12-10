import 'reflect-metadata';
import { Container } from 'inversify';

import SERVICE_IDENTIFIER from '@/services/identifiers';
import TAG from '@/services/tags';
import { IElectronMainThreadService, Main } from '@/services/Main';
import { IDescriptionStore } from '@/services/Descriptions/types';
import { CDDADescriptions } from '@/services/Descriptions/CDDADescriptions';

export const container = new Container();

container.bind<IDescriptionStore>(SERVICE_IDENTIFIER.DescriptionStore).to(CDDADescriptions).whenTargetNamed(TAG.CDDA);
container.bind<IElectronMainThreadService>(SERVICE_IDENTIFIER.Main).to(Main);
