import { CDDA_JSON_TYPES } from './names';

export interface IItemAction {
  type: CDDA_JSON_TYPES.item_action;
  id: string;
  name: Name | Name2 | string;
}

interface Name2 {
  str: string;
}

interface Name {
  ctxt: string;
  str: string;
}
