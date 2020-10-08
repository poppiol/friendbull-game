export interface Armor {
  id: number;
  name: string;
  armor: number;
  // tslint:disable-next-line:variable-name
  minimum_level: number;
  // tslint:disable-next-line:variable-name
  stack_size: number;
  cost: number;
  colour: string;
  type: string;
  img: string;
}

export const shields: Armor[] = [
  {
    id: 1,
    name: 'deski',
    armor: 10,
    minimum_level: 1,
    stack_size: 4,
    cost: 4,
    colour: 'szary',
    type: 'shield',
    img: 'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/shield3.png'
  }, {
    id: 2,
    name: 'duża tarcza',
    armor: 12,
    minimum_level: 1,
    stack_size: 6,
    cost: 10,
    colour: 'szary',
    type: 'shield',
    img: 'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/shield3.png'
  }
];

export const armors: Armor[] = [
  {
    id: 3,
    name: 'szmaty',
    armor: 4,
    minimum_level: 1,
    stack_size: 2,
    cost: 2,
    colour: 'szary',
    type: 'armor',
    img: 'https://qph.fs.quoracdn.net/main-qimg-ad4d39f6acef9aa717783220c4f977e6'
  },
  {
    id: 4,
    name: 'skóra',
    armor: 10,
    minimum_level: 1,
    stack_size: 4,
    cost: 10,
    colour: 'szary',
    type: 'armor',
    img: 'https://qph.fs.quoracdn.net/main-qimg-ad4d39f6acef9aa717783220c4f977e6'
  }
];
