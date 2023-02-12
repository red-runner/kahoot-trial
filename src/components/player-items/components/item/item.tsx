import { FC } from 'react';
import { ItemProps } from './item.interface';
import { StylesWrapper } from './item.styles';
import { Tile } from '../../../tile';

export const Item: FC<ItemProps> = ({ tile, quantity, score }) => {
  return (
    <StylesWrapper className="player-item" data-testid="player-item">
      <Tile
        style={{ '--tile-size': '3rem', '--font-size': '1.5rem' }}
        className="item__tile"
        backgroundColor={tile?.backgroundColor}
      >
        {tile?.children}
      </Tile>
      <span className="item__quantity">{quantity}</span>
      <span className="item__score">{score}</span>
    </StylesWrapper>
  );
};
