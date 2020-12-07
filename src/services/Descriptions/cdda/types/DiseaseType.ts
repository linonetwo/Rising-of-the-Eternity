import { CDDA_JSON_TYPES } from './names';

export interface IDiseaseType {
  type: CDDA_JSON_TYPES.disease_type;
  id: string;
  min_duration: string;
  max_duration: string;
  min_intensity: number;
  max_intensity: number;
  health_threshold: number;
  symptoms: string;
}
