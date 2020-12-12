import { v4 as uuid } from 'uuid';

import { ICDDAJSONWithComments } from './types';

/**
 * Merge "//" comment in CDDA JSON
 * @param item1 item to be return
 * @param item2 item that have comment to be merged into item1
 */
export const mergeJSONComments = <D extends ICDDAJSONWithComments>(item1: D, item2: D): D => {
  if ('//' in item2) {
    if ('//' in item1) {
      item1[`//${uuid()}` as '//'] = item2['//'];
    }
  }
  return item1;
};
