/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { IProcessors, ICDDAJSON } from './types';
import { InspectResultWithContent } from '../types';

/**
 * Loaders of each type of CDDA data JSON Object, load things into GUN db
 */
export const knowledgeBaseBuilders = {} as IProcessors<Loki>;

/**
 * Put all things from CDDA data JSON to GUN db
 * @param fileItem an InspectResultWithContent from getFileJSON()
 * @param knowledgeBase an GUN db instance
 */
export function buildKnowledgeBaseFromCDDAData<DB>(
  fileItem: InspectResultWithContent<ICDDAJSON[]>,
  knowledgeBase: DB,
  knowledgeBaseBuilders = {} as IProcessors<DB>,
): DB {
  if (fileItem.fileType === 'data') {
    const { content } = fileItem;
    if (Array.isArray(content)) {
      // CDDA data is normally an Array of object
      for (const descriptionItem of content) {
        const translator = knowledgeBaseBuilders[descriptionItem.type];
        if (translator === undefined) {
          // TODO: use logger instead, and we read logger output for user later, just like the rimworld
          console.warn(`No translator found for ${descriptionItem.type}`);
        } else {
          translator(descriptionItem as never, knowledgeBase);
        }
      }
    } else {
      // TODO: use logger instead, and we read logger output for user later, just like the rimworld
      console.warn(`File content is not an array! ${fileItem.filePath}`);
    }
  } else if (fileItem.fileType === 'buffer') {
    // TODO: handle PNG loading
  } else {
    // TODO: use logger instead
    console.warn(`Get fileItem.fileType === ${fileItem.fileType}, content is broken in ${fileItem.filePath}`);
  }
  return knowledgeBase;
}
