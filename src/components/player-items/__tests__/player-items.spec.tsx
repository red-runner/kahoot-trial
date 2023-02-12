import { render } from '@testing-library/react';
import { PlayerItems } from '../player-items';
import { PlayerItemsProps } from '../player-items.interface';

describe('the `PlayerItems` component', () => {
  test('it should render the right component', () => {
    const onClickMock = jest.fn();
    const fields: [string, string, string] = ['the', 'yellow', 'submarine'];
    const items = [
      { tile: { children: 'A', backgroundColor: 'salmon' }, score: 10, quantity: 4 },
      { tile: { children: 'B', backgroundColor: 'salmon' }, score: 11, quantity: 5 },
      { tile: { children: 'C', backgroundColor: 'salmon' }, score: 12, quantity: 6 }
    ];

    const props: PlayerItemsProps = {
      itemsHeader: fields,
      items,
      cta: {
        text: 'button-button',
        onClick: onClickMock
      },
      total: 999,
      bonus: 1000
    };

    const { getByTestId, getByText } = render(<PlayerItems {...props} />);

    const playerItems = getByTestId('player-items');
    const flexContainer = getByTestId('flex-container');
    const total = getByText('999');
    const bonus = getByText('1000');

    expect(playerItems).toBeInTheDocument();
    expect(flexContainer).toHaveStyle('overflow: auto');
    expect(flexContainer).toHaveStyle('margin-top: 1rem');
    expect(total).toBeInTheDocument();
    expect(bonus).toBeInTheDocument();

    fields.forEach((field) => {
      expect(getByText(field)).toBeInTheDocument();
    });

    items.forEach(({ quantity, score, tile }) => {
      expect(getByText(tile.children)).toBeInTheDocument();
      expect(getByText(quantity)).toBeInTheDocument();
      expect(getByText(score)).toBeInTheDocument();
    });
  });

  describe('if `itemsHeader` is empty', () => {
    test('it should not render the items', () => {
      const onClickMock = jest.fn();
      const fields: [] = [];
      const items: [] = [];

      const props: PlayerItemsProps = {
        itemsHeader: fields,
        items,
        cta: {
          text: 'button-button',
          onClick: onClickMock
        },
        total: 999,
        bonus: 1000
      };

      const { container } = render(<PlayerItems {...props} />);

      const itemsHeader = container.querySelector('items-header');

      expect(itemsHeader).not.toBeInTheDocument();
    });
  });
});
