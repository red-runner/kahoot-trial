import { act, fireEvent, render } from '@testing-library/react';
import { Tile } from '../tile';

const TEXT = 'Nile Rodgers';
const props = {
  className: 'get-lucky',
  style: { color: 'salmon' }
};

describe('the `Tile` component', () => {
  test('it should render with the right children', () => {
    const { getByTestId, getByText } = render(<Tile {...props}>{TEXT}</Tile>);

    const tile = getByTestId('tile');
    const tileChildren = getByText(TEXT);

    expect(tile).toBeInTheDocument();
    expect(tileChildren).toBeInTheDocument();

    expect(tile).toHaveClass('get-lucky');
    expect(tile).toHaveStyle('background-color: var(--primary)');
    expect(tile).toHaveStyle('color: salmon');
    expect(tile).toHaveStyle('cursor: default');
  });

  describe('the `onClick` interaction', () => {
    test('it should trigger the right method', () => {
      const onClickMock = jest.fn();

      const { getByTestId } = render(
        <Tile {...props} onClick={onClickMock}>
          {TEXT}
        </Tile>
      );

      const tile = getByTestId('tile');

      act(() => {
        fireEvent.click(tile);
      });

      expect(onClickMock).toHaveBeenCalledTimes(1);
      expect(tile).toHaveAttribute('role', 'button');
      expect(tile).toHaveStyle('cursor: pointer');
    });
  });

  describe('if `children` is undefined', () => {
    test('it should not render the component', () => {
      const { container } = render(<Tile {...props}>{undefined}</Tile>);

      const tile = container.querySelector('[data-testid="tile"]');

      expect(tile).not.toBeInTheDocument();
    });
  });
});
