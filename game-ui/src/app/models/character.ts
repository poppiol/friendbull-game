import {Bag, bagiDarka, bagiMacka, bagiPiotrka} from './bag';

export interface Character {
  id: number;
  name: string;
  gender: string;
  account_id: number;
  bag: Bag[];
  is_in_pvp_area: number;
  health: number;
  xp: number;
  level: number;
  location_id: number;
}

export const characters: Character[] = [
  {
    id: 1,
    name: 'Piotrek',
    gender: 'Male',
    account_id: 1,
    bag: bagiPiotrka,
    is_in_pvp_area: 1,
    health: 100,
    xp: 10,
    level: 1,
    location_id: 1,
  }, {
    id: 2,
    name: 'Darek',
    gender: 'Female',
    account_id: 2,
    bag: bagiDarka,
    is_in_pvp_area: 1,
    health: 70,
    xp: 70,
    level: 1,
    location_id: 1,
  }, {
    id: 3,
    name: 'Maciek',
    gender: 'Male',
    account_id: 3,
    bag: bagiMacka,
    is_in_pvp_area: 1,
    health: 20,
    xp: 40,
    level: 1,
    location_id: 1,
  }
];

