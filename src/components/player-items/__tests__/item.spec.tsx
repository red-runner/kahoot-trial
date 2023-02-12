import { render } from '@testing-library/react';
import { Item } from '../components/item';

describe('the `Item` component', () => {
  test('it should render with the right children', () => {
    const { getByTestId, getByText } = render(
      <Item tile={{ children: 'parcels', backgroundColor: 'magenta' }} quantity={999} score={9999} />
    );

    const item = getByTestId('item');
    const tile = getByTestId('tile');
    const tileChildren = getByText('parcels');
    const quantity = getByTestId('item-quantity');
    const score = getByTestId('item-score');

    expect(tile).toHaveStyle('background-color: magenta');

    expect(item).toBeInTheDocument();
    expect(tileChildren).toBeInTheDocument();
    expect(quantity).toHaveTextContent('999');
    expect(score).toHaveTextContent('9999');
  });

  describe('if tile.children is undefined', () => {
    test('it should not render the `Tile` component', () => {
      const { container } = render(
        <Item tile={{ children: '', backgroundColor: 'magenta' }} quantity={999} score={9999} />
      );

      const tile = container.querySelector('[data-testid="tile"]');

      expect(tile).not.toBeInTheDocument();
    });
  });

  describe('the `score` and `quantity` props', () => {
    test('by default, they should render as `0`', () => {
      const { getByTestId } = render(<Item tile={{ children: 'parcels', backgroundColor: 'magenta' }} />);

      const quantity = getByTestId('item-quantity');
      const score = getByTestId('item-score');

      expect(quantity).toHaveTextContent('0');
      expect(score).toHaveTextContent('0');
    });
  });
});
