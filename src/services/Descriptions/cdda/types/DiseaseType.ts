export interface IDiseaseType {
  type: 'disease_type';
  id: string;
  min_duration: string;
  max_duration: string;
  min_intensity: number;
  max_intensity: number;
  health_threshold: number;
  symptoms: string;
}
