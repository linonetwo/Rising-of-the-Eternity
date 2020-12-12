import { v4 as uuid } from 'uuid';

import { ICDDAJSONWithComments } from './types';

/**
 * Merge "//" comment in CDDA JSON, inplace into item1
 * @param item1 item to be return
 * @param item2 item that have comment to be merged into item1
 */
export const mergeJSONComments = <D extends ICDDAJSONWithComments>(item1: D, item2: D): void => {
  if ('//' in item1) {
    if ('//' in item2) {
      item1[`//${uuid()}` as '//'] = item2['//'];
    }
  }
};
