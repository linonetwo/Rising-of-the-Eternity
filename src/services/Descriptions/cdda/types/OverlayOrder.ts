export interface IOverlayOrder {
  type: 'overlay_order';
  overlay_ordering: Overlayordering[];
}

interface Overlayordering {
  id: string[];
  order: number;
}
