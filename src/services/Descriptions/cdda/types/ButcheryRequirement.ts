export interface IButcheryRequirement {
  type: 'butchery_requirement';
  id: string;
  requirements: Requirements;
}

interface Requirements {
  '1.0': _10[];
  1.2: _10[];
}

interface _10 {
  FIELD_DRESS: string;
  QUARTER: string;
  SKIN: string;
  DISMEMBER: string;
  DISSECT: string;
  FULL: string;
  QUICK: string;
}
