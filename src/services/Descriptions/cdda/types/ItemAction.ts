export interface IItemAction {
  type: 'item_action';
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
