import {Item, itemArmors, itemShields, itemWeapons} from './item';

export interface Inventory {
  character_id: number;
  weapon: Item;
  shield: Item;
  armor: Item;
}

export const inventoryPiotrka: Inventory[] = [
  {
    character_id: 1,
    weapon: itemWeapons[0],
    shield: itemShields[1],
    armor: itemArmors[0]
  }
];
export const inventoryDarka: Inventory[] = [
  {
    character_id: 2,
    weapon: itemWeapons[1],
    shield: itemShields[1],
    armor: itemArmors[0]
  }
];
export const inventoryMacka: Inventory[] = [
  {
    character_id: 3,
    weapon: itemWeapons[2],
    shield: itemShields[0],
    armor: itemArmors[1]
  }
];
