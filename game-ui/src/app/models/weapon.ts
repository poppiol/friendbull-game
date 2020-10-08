export interface Weapon {
  id: number;
  name: string;
  damage_min: number;
  damage_max: number;
  colour: string;
  stack_size: number;
  minimum_level: number;
  cost: number;
}

export const weapons: Weapon[] = [
  {
    id: 1,
    name: 'Krótki miecz',
    damage_min: 1,
    damage_max: 3,
    colour: 'szary',
    stack_size: 3,
    minimum_level: 1,
    cost: 3,
  },
  {
    id: 2,
    name: 'Długi miecz',
    damage_min: 3,
    damage_max: 7,
    colour: 'szary',
    stack_size: 6,
    minimum_level: 1,
    cost: 8,
  },
  {
    id: 3,
    name: 'Pałka',
    damage_min: 2,
    damage_max: 4,
    colour: 'bialy',
    stack_size: 2,
    minimum_level: 1,
    cost: 2,
  }
];
