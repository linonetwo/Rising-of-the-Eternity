import { injectable } from 'inversify';
import Loki from 'lokijs';
import path from 'path';

import { readCDDASourceFiles, buildKnowledgeBaseFromCDDAData, IProcessors } from './cdda';
import { modFolder } from '@/constants/paths';
import { IDescriptionStore } from './types';

@injectable()
export class CDDADescriptions implements IDescriptionStore {
  database: Loki;

  constructor() {
    this.database = new Loki('cdda');
  }

  async init(): Promise<void> {
    const cddaModPath = path.join(modFolder, 'cdda');
    const cddaCorePath = path.join(cddaModPath, 'core');
    const folderInspectResults = await readCDDASourceFiles(cddaCorePath);
    // load read JSON to the database
    for (const folderInspectResult of folderInspectResults) {
      buildKnowledgeBaseFromCDDAData<Loki>(folderInspectResult, this.database, this.buildLoaders());
    }
  }

  buildLoaders(): IProcessors<Loki> {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const knowledgeBaseBuilders = {} as IProcessors<Loki>;
    // ##        #######     ###    ########  ######## ########   ######
    // ##       ##     ##   ## ##   ##     ## ##       ##     ## ##    ##
    // ##       ##     ##  ##   ##  ##     ## ##       ##     ## ##
    // ##       ##     ## ##     ## ##     ## ######   ########   ######
    // ##       ##     ## ######### ##     ## ##       ##   ##         ##
    // ##       ##     ## ##     ## ##     ## ##       ##    ##  ##    ##
    // ########  #######  ##     ## ########  ######## ##     ##  ######

    let count = 0;
    knowledgeBaseBuilders.achievement = (item, database) => {
      if (count < 3) {
        // DEBUG: console
        console.log(`item`, item);
        count += 1;
      }
    };

    return knowledgeBaseBuilders;
  }
}
