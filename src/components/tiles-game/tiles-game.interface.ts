interface GameTile {
  children: string;
  backgroundColor: string;
  points: number;
  bonus?: {
    points: number;
    multiple: number;
  };
}

export interface TilesGameProps {
  tiles: GameTile[];
}
