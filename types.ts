
export enum VantaEffect {
  CLOUDS = 'CLOUDS',
  DOTS = 'DOTS',
  NET = 'NET',
  TOPOLOGY = 'TOPOLOGY',
  WAVES = 'WAVES',
  RINGS = 'RINGS',
  FOG = 'FOG',
  NONE = 'NONE'
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface UseCase {
  role: string;
  description: string;
  benefit: string;
}
