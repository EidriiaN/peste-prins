export interface FishingLocation {
  id: string;
  name: string;
  type: 'balta' | 'lac' | 'rau' | 'mare';
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  fishTypes: string[];
  image: string;
}

export const fishingLocations: FishingLocation[] = [
  {
    id: 'balta-lilieci',
    name: 'Balta Lilieci Ialomița',
    type: 'balta',
    coordinates: {
      lat: 44.5333,
      lng: 26.9167
    },
    description: 'O locație excelentă pentru pescuit cu numeroase specii de pești',
    fishTypes: ['Șalău', 'Caras', 'Biban'],
    image: '/balta_lilieci.jpg'
  },
  {
    id: 'lacul-tancabesti',
    name: 'Lacul Tancăbești',
    type: 'lac',
    coordinates: {
      lat: 44.6667,
      lng: 26.1333
    },
    description: 'Un lac pitoresc cu pești mari și peisaje spectaculoase',
    fishTypes: ['Păstrăv', 'Șalău', 'Biban'],
    image: '/lacul_tancabesti.jpg'
  }
]; 