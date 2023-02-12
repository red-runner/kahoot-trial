import { TileProps } from '../../components';
import { ItemProps } from '../../components/player-items/components/item/item.interface';

export interface GameState {
  tiles: TileProps[] | [];
  playerItems: PlayerItem[];
  total: number;
  bonus: number;
}

export interface PlayerItem extends ItemProps {
  points: number;
}

export interface GameActionAddItem {
  type: 'add.player.item';
  payload: PlayerItem[];
}

export interface GameActionAddBonus {
  type: 'add.bonus';
  payload: number;
}

export interface GameActionAddTotal {
  type: 'add.total';
  payload: number;
}

export interface GameActionReset {
  type: 'reset';
}

export type GameAction = GameActionAddItem | GameActionAddBonus | GameActionAddTotal | GameActionReset;
