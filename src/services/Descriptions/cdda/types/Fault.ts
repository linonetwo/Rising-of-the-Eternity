export interface IFault {
  id: string;
  type: 'fault';
  name: Name;
  description: string;
  mending_methods: Mendingmethod[];
  flags?: string[];
}

interface Mendingmethod {
  id: string;
  name: string;
  success_msg: string;
  time: string;
  skills: Skill[];
  requirements: Requirements;
  description?: string;
  turns_into?: string;
  also_mends?: string;
}

interface Requirements {
  qualities?: Skill[];
  components?: Array<Array<Array<number | string>>>;
  tools?: Array<Array<Array<number | string>>>;
}

interface Skill {
  id: string;
  level: number;
}

interface Name {
  str: string;
}
