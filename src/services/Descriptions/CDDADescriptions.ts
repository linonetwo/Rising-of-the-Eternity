import { injectable } from 'inversify';
import Loki, { Collection } from 'lokijs';
import path from 'path';

import { readCDDASourceFiles, buildKnowledgeBaseFromCDDAData, IProcessors } from './cdda';
import { modFolder } from '@/constants/paths';
import { IDescriptionStore, ExtraDatabaseCollections, IDescriptionLoadingError } from './types';

@injectable()
export class CDDADescriptions implements IDescriptionStore {
  private readonly database: Loki;
  private readonly errorLogs: Collection<IDescriptionLoadingError>;

  constructor() {
    this.database = new Loki('cdda');
    this.errorLogs = this.database.addCollection<IDescriptionLoadingError>(ExtraDatabaseCollections.error);
  }

  public async init(): Promise<void> {
    const cddaModPath = path.join(modFolder, 'cdda');
    const cddaCorePath = path.join(cddaModPath, 'core');
    const folderInspectResults = await readCDDASourceFiles(cddaCorePath);
    // load read JSON to the database
    const loaders = this.buildLoaders();
    for (const folderInspectResult of folderInspectResults) {
      buildKnowledgeBaseFromCDDAData<Loki>(folderInspectResult, this.database, loaders, this.addErrorLog);
    }
  }

  /**
   * Build loaders of each type of CDDA data JSON Object, load things into the db
   */
  private buildLoaders(): IProcessors<Loki> {
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

  public addErrorLog = (log: IDescriptionLoadingError): void => {
    this.errorLogs.insert(log);
  };

  public printErrorLogToConsole(): void {
    this.errorLogs.find().forEach((logItem) => {
      console.log('');
      console.group();
      console.warn(`\u001B[4m${logItem.message}\u001B[0m`);
      console.warn(`Type: \u001B[33m\u001B[40m${logItem.type}\u001B[0m , Path: \u001B[36m${logItem.filePath}\u001B[0m`);
      console.groupEnd();
      console.log('');
    });
  }
}
