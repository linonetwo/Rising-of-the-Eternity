/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { noop } from 'lodash';

import { IProcessors, ICDDAJSON } from './types';
import { InspectResultWithContent, IDescriptionLoadingError } from '../types';

/**
 * Put all things from CDDA data JSON to GUN db
 * @param fileItem an InspectResultWithContent from getFileJSON()
 * @param knowledgeBase an GUN db instance
 */
export function buildKnowledgeBaseFromCDDAData<DB>(
  fileItem: InspectResultWithContent<ICDDAJSON[]>,
  knowledgeBase: DB,
  knowledgeBaseBuilders: IProcessors<DB>,
  addErrorLog: (log: IDescriptionLoadingError) => void,
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
          translator(descriptionItem as never, knowledgeBase);
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
