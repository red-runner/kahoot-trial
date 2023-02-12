import { FC } from 'react';

import { ItemsHeader } from './components/items-header/items-header';
import { Item } from './components/item';
import { FlexContainer } from '../flex-container';

import { StylesWrapper } from './player-items.styles';
import { BONUSES, TOTAL } from '../../constants';
import { PlayerItemsProps } from './player-items.interface';

export const PlayerItems: FC<PlayerItemsProps> = ({ itemsHeader, items, bonus = 0, total = 0, cta }) => {
  return (
    <StylesWrapper data-testid="player-items">
      {itemsHeader && <ItemsHeader fields={itemsHeader} />}
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
      <div className="player-items__bonus" data-testid="player-items.bonus">
        <span className="bonus__title">{BONUSES}</span>
        <span data-testid="bonus-amount" className="bonus__amount">
          {bonus}
        </span>
      </div>
      <div className="player-items__score" data-testid="player-items.score">
        <div className="score-total">
          <p className="score-total__title">{TOTAL}</p>
          <p data-testid="total-amount" className="score-total__amount">
            {total}
          </p>
        </div>
        <button data-testid="score-cta" className="score__cta" onClick={cta?.onClick}>
          {cta?.text}
        </button>
      </div>
    </StylesWrapper>
  );
};
