export interface Lead {
  id: string;
  name: string;
  phone: string;
  age: number;
  location: string;
  category: 'Masculino' | 'Feminino' | 'Não-Binário';
  extractionDate: string;
}

export const MOCK_LEADS: Lead[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    phone: '+55 11 99999-9999',
    age: 28,
    location: 'São Paulo, SP',
    category: 'Masculino',
    extractionDate: '2023-10-27 14:30',
  },
  {
    id: '2',
    name: 'Sarah Connor',
    phone: '+55 21 98888-8888',
    age: 34,
    location: 'Rio de Janeiro, RJ',
    category: 'Feminino',
    extractionDate: '2023-10-27 14:15',
  },
  {
    id: '3',
    name: 'Viktor V',
    phone: '+55 31 97777-7777',
    age: 25,
    location: 'Belo Horizonte, MG',
    category: 'Não-Binário',
    extractionDate: '2023-10-27 13:50',
  },
  {
    id: '4',
    name: 'Johnny S.',
    phone: '+55 41 96666-6666',
    age: 45,
    location: 'Curitiba, PR',
    category: 'Masculino',
    extractionDate: '2023-10-27 13:20',
  },
  {
    id: '5',
    name: 'Molly Millions',
    phone: '+55 51 95555-5555',
    age: 30,
    location: 'Porto Alegre, RS',
    category: 'Feminino',
    extractionDate: '2023-10-27 12:45',
  },
];

export const CITY_DISTRIBUTION = [
  { name: 'SAO PAULO', value: 45000 },
  { name: 'RIO JANEIRO', value: 32000 },
  { name: 'BELO HORIZONTE', value: 24000 },
  { name: 'CURITIBA', value: 37000 },
  { name: 'PORTO ALEGRE', value: 16000 },
  { name: 'BRASILIA', value: 29000 },
];

export const GENDER_DISTRIBUTION = [
  { name: 'MULHER', value: 48 },
  { name: 'HOMEM', value: 42 },
  { name: 'TRANS', value: 10 },
];

export const STATE_MATRIX = [
  { state: 'SP', value: 100, status: 'MAX' },
  { state: 'RJ', value: 70, status: 'HIGH' },
  { state: 'MG', value: 80, status: 'HIGH' },
  { state: 'RS', value: 95, status: 'CRIT' },
  { state: 'PR', value: 30, status: 'LOW' },
  { state: 'SC', value: 50, status: 'MED' },
];
