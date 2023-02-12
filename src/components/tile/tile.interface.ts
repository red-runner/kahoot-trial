import { CSSProperties } from 'react';

export interface TileProps {
  children?: string;
  onClick?: () => void;
  backgroundColor?: string;
  className?: string;
  style?: CSSProperties | Record<string, string>;
}
