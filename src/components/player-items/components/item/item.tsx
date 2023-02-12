import { FC } from 'react';
import { ItemProps } from './item.interface';
import { StylesWrapper } from './item.styles';
import { Tile } from '../../../tile';

export const Item: FC<ItemProps> = ({ tile, quantity = 0, score = 0 }) => {
  return (
    <StylesWrapper className="item" data-testid="item">
      {tile?.children && (
        <Tile
          style={{ '--tile-size': '3rem', '--font-size': '1.5rem' }}
          className="item__tile"
          backgroundColor={tile?.backgroundColor}
        >
          {tile?.children}
        </Tile>
      )}

      <span data-testid="item-quantity" className="item__quantity">
        {quantity}
      </span>

      <span data-testid="item-score" className="item__score">
        {score}
      </span>
    </StylesWrapper>
  );
};
