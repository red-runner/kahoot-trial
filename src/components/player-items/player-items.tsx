import { FC } from 'react';
import { FieldTuple } from './components/items-header/items-header.interface';

import { ItemsHeader } from './components/items-header/items-header';
import { Item } from './components/item';
import { ItemProps } from './components/item/item.interface';
import { FlexContainer } from '../flex-container';

import { StylesWrapper } from './player-items.styles';

interface PlayerItemsProps {
  itemsHeader: FieldTuple<3, string>;
  items: ItemProps[];
  bonus?: number;
  total?: number;
  cta: {
    text: string;
    onClick: () => void;
  };
}

export const PlayerItems: FC<PlayerItemsProps> = ({ itemsHeader, items, bonus = 0, total = 0, cta }) => {
  return (
    <StylesWrapper data-testid="player-items">
      {itemsHeader && <ItemsHeader fields={itemsHeader} />}
      {items && (
        <FlexContainer
          style={{ overflow: 'auto', marginTop: '1rem' }}
          flexDirection="column"
          flexGrow={1}
          flexWrap="nowrap"
          gap={1}
        >
          {items?.map((item, index) => (
            <Item
              key={index}
              tile={{ children: item?.tile?.children, backgroundColor: item?.tile?.backgroundColor }}
              quantity={item?.quantity}
              score={item?.score}
            />
          ))}
        </FlexContainer>
      )}
      <div className="player-items__bonus" data-testid="player-items.bonus">
        <span className="bonus__title">BONUSES</span>
        <span className="bonus__amount">{bonus}</span>
      </div>
      <div className="player-items__score" data-testid="player-items.score">
        <div className="score-total">
          <p className="score-total__title">TOTAL</p>
          <p className="score-total__amount">{total}</p>
        </div>
        <button className="score__cta" onClick={cta?.onClick}>
          {cta?.text}
        </button>
      </div>
    </StylesWrapper>
  );
};
