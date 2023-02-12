import { ItemProps } from './components/item/item.interface';

export interface PlayerItemsProps {
  itemsHeader: string[];
  items: ItemProps[];
  bonus?: number;
  total?: number;
  cta: {
    text: string;
    onClick: () => void;
  };
}
