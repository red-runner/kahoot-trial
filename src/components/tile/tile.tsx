import { FC } from 'react';
import { TileProps } from './tile.interface';
import { StylesWrapper } from './tile.styles';

export const Tile: FC<TileProps> = ({
  children,
  onClick,
  points,
  bonus,
  backgroundColor = 'var(--primary)',
  className,
  style
}: TileProps) => {
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
      onClick={() => {
        onClick && points && bonus && onClick({ points, bonus });
      }}
    >
      {children}
    </StylesWrapper>
  );
};
