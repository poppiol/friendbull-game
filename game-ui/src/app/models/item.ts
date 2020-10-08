import {Weapon, weapons} from './weapon';
import {Armor, armors, shields} from './armor';

export interface Item{
  id: number;
  cost: number;
  prefix: number;
  suffix: number;
  weapon: Weapon;
  armor: Armor;
}

export const itemWeapons: Item[] = [
  {
    id: 1,
    cost: 10,
    prefix: null,
    suffix: null,
    weapon: weapons[0],
    armor: null
  },
    {
    id: 2,
    cost: 10,
    prefix: null,
    suffix: null,
    weapon: weapons[1],
    armor: null
  },
    {
    id: 3,
    cost: 10,
    prefix: null,
    suffix: null,
    weapon: weapons[2],
    armor: null
  }
];

export const itemArmors: Item[] = [
  {
    id: 1,
    cost: 10,
    prefix: null,
    suffix: null,
    weapon: null,
    armor: armors[0]
  },
  {
    id: 2,
    cost: 10,
    prefix: null,
    suffix: null,
    weapon: null,
    armor: armors[1]
  }
];

export const itemShields: Item[] = [
  {
    id: 1,
    cost: 10,
    prefix: null,
    suffix: null,
    weapon: null,
    armor: shields[0]
  },
  {
    id: 2,
    cost: 10,
    prefix: null,
    suffix: null,
    weapon: null,
    armor: shields[1]
  }
];


