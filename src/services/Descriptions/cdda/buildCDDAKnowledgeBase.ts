/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { noop } from 'lodash';

import { IProcessors, ICDDAJSON } from './types';
import { InspectResultWithContent, IDescriptionLoadingError } from '../types';

/**
 * Put all things from CDDA data JSON to GUN db
 * @param fileItem an InspectResultWithContent from getFileJSON()
 * @param knowledgeBase an GUN db instance
 * @param addErrorLog add error message for later print
 * @param round we may go through data for several passes, so we can load things, and build relations later
 */
export function buildKnowledgeBaseFromCDDAData<DB>(
  fileItem: InspectResultWithContent<ICDDAJSON[]>,
  knowledgeBase: DB,
  knowledgeBaseBuilders: IProcessors<DB>,
  addErrorLog: (log: IDescriptionLoadingError) => void,
  round: number,
): DB {
  const { filePath, type: fileType } = fileItem;
  if (fileItem.fileType === 'data') {
    const { content } = fileItem;
    if (Array.isArray(content)) {
      // CDDA data is normally an Array of object
      for (const descriptionItem of content) {
        const translator = knowledgeBaseBuilders[descriptionItem.type];
        if (translator === undefined) {
          knowledgeBaseBuilders[descriptionItem.type] = noop;
          addErrorLog({
            type: descriptionItem.type,
            filePath,
            message: `No resource loader found for JSON description with type: ${descriptionItem.type}`,
          });
        } else {
          translator(descriptionItem as never, round, knowledgeBase);
        }
      }
    } else {
      addErrorLog({
        type: fileType,
        filePath,
        message: `File content is not an array! for JSON description file with file type: ${fileType}`,
      });
    }
  } else if (fileItem.fileType === 'buffer') {
    // TODO: handle PNG loading
  } else {
    addErrorLog({
      type: fileType,
      filePath,
      message: `Get fileItem.fileType: ${fileType} . content is broken in ${filePath} : ${fileItem.errorMessage}`,
    });
  }
  return knowledgeBase;
}
