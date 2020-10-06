import {Character} from './character';

export interface Bag {
  id: number;
  name: string;
  size: number;
}

export const Bag: Bag[] = [
  {
    id: 1,
    name: 'Bag Piotrka',
    size: 12
  }, {
    id: 2,
    name: 'Bag Darka',
    size: 18
  }, {
    id: 3,
    name: 'Bag Piotrka',
    size: 12
  }
];
