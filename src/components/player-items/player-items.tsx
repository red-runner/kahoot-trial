import { FC } from 'react';
import { FieldTuple } from './components/items-header/items-header.interface';

import { ItemsHeader } from './components/items-header/items-header';
import { Item } from './components/item';
import { ItemProps } from './components/item/item.interface';
import { FlexContainer } from '../flex-container';

interface PlayerItemsProps {
  itemsHeader: FieldTuple<3, string>;
  items: ItemProps[];
}

export const PlayerItems: FC<PlayerItemsProps> = ({ itemsHeader, items }) => {
  return (
    <div>
      {itemsHeader && <ItemsHeader fields={itemsHeader} />}
      {items && (
        <FlexContainer>
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
    </div>
  );
};
