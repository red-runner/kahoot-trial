export interface TileProps {
  children: string;
  onClick?: ({ points, bonus }: { points: number; bonus: number }) => void;
  points?: number;
  bonus?: number;
  backgroundColor: string;
  className?: string;
}
