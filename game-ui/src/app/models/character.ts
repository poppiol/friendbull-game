export interface Character {
  id: number;
  name: string;
  gender: string;
  account_id: number;
  bag_id: number;
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
    bag_id: 1,
    is_in_pvp_area: 1,
    health: 100,
    xp: 0,
    level: 1,
    location_id: 1,
  },  {
    id: 2,
    name: 'Darek',
    gender: 'Male',
    account_id: 2,
    bag_id: 2,
    is_in_pvp_area: 1,
    health: 100,
    xp: 0,
    level: 1,
    location_id: 1,
  },  {
    id: 3,
    name: 'Maciek',
    gender: 'Male',
    account_id: 3,
    bag_id: 1,
    is_in_pvp_area: 1,
    health: 100,
    xp: 0,
    level: 1,
    location_id: 1,
  }
];

