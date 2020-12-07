import { CDDA_JSON_TYPES } from './names';

export interface IOverlayOrder {
  type: CDDA_JSON_TYPES.overlay_order;
  overlay_ordering: Overlayordering[];
}

interface Overlayordering {
  id: string[];
  order: number;
}
