import { FC } from 'react';
import { TileProps } from './tile.interface';
import { StylesWrapper } from './tile.styles';

export const Tile: FC<TileProps> = ({ children, onClick, backgroundColor, className, style }: TileProps) => {
  if (!children) {
    return null;
  }

  let role;

  if (onClick) {
    role = 'button';
  }

  return (
    <StylesWrapper
      style={style}
      className={className}
      data-testid="tile"
      backgroundColor={backgroundColor}
      role={role}
      onClick={onClick}
    >
      {children}
    </StylesWrapper>
  );
};
