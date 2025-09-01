export interface Powerstat {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export interface Hero {
  id: number;
  name: string;
  powerstats: Powerstat;
  biography: string;
  image: string;
  firstAppearance: string;
  publisher: string;
}
