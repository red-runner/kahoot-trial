import { act, fireEvent, render } from '@testing-library/react';
import { TilesGame } from '../tiles-game';
import {
  TILES,
  KAHOOT_GAME_HEADER,
  KAHOOT_PLAYER_HEADER,
  BONUSES,
  TOTAL,
  NEW_GAME,
  SCORE_HEADER_ITEMS
} from '../../../constants';

describe('the `TilesGame` component', () => {
  test('it should render the right elements', () => {
    const { getAllByTestId, getByText, getByTestId } = render(<TilesGame tiles={TILES} />);

    const tiles = getAllByTestId('tile');
    const headers = getAllByTestId('header');
    const gameHeader = getByText(KAHOOT_GAME_HEADER);
    const playerHeader = getByText(KAHOOT_PLAYER_HEADER);
    const bonuses = getByText(BONUSES);
    const total = getByText(TOTAL);
    const ctaText = getByText(NEW_GAME);
    const playerItems = getByTestId('player-items');

    expect(tiles).toHaveLength(4);
    expect(headers).toHaveLength(2);
    expect(gameHeader).toBeInTheDocument();
    expect(playerHeader).toBeInTheDocument();
    expect(bonuses).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(ctaText).toBeInTheDocument();
    expect(playerItems).toBeInTheDocument();

    SCORE_HEADER_ITEMS.forEach((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  describe('the player item addition case', () => {
    describe('when the user clicks a tile', () => {
      test('it should add a player item and score correctly', () => {
        const { getByText, getByTestId } = render(<TilesGame tiles={TILES} />);

        const tileA = getByText('A');

        act(() => {
          fireEvent.click(tileA);
        });

        const addedItem = getByTestId('item');

        expect(addedItem).toBeInTheDocument();
        expect(addedItem.firstChild).toHaveTextContent('A');

        const uiScoreResults = {
          quantity: getByTestId('item-quantity').innerHTML,
          score: getByTestId('item-score').innerHTML,
          bonusAmount: getByTestId('bonus-amount').innerHTML,
          totalAmount: getByTestId('total-amount').innerHTML
        };

        expect(uiScoreResults).toMatchInlineSnapshot(`
          {
            "bonusAmount": "0",
            "quantity": "1",
            "score": "50",
            "totalAmount": "50",
          }
        `);
      });
    });
  });

  describe('the player bonus and total addition case', () => {
    test('it should add the right bonus and total points', () => {
      const { getByText, getByTestId } = render(<TilesGame tiles={TILES} />);

      const tileA = getByText('A');

      act(() => {
        fireEvent.click(tileA);
      });

      act(() => {
        fireEvent.click(tileA);
      });

      act(() => {
        fireEvent.click(tileA);
      });

      act(() => {
        fireEvent.click(tileA);
      });

      const uiScoreResults = {
        quantity: getByTestId('item-quantity').innerHTML,
        score: getByTestId('item-score').innerHTML,
        bonusAmount: getByTestId('bonus-amount').innerHTML,
        totalAmount: getByTestId('total-amount').innerHTML
      };

      expect(uiScoreResults).toMatchInlineSnapshot(`
        {
          "bonusAmount": "50",
          "quantity": "4",
          "score": "250",
          "totalAmount": "250",
        }
      `);
    });
  });

  describe('the multi tile addition with bonuses case', () => {
    test('it should add the right bonus and total points', () => {
      const { getByText, getByTestId, getAllByTestId } = render(<TilesGame tiles={TILES} />);

      const tileA = getByText('A');
      const tileB = getByText('B');
      const tileC = getByText('C');
      const tileD = getByText('D');

      act(() => {
        fireEvent.click(tileA);
      });

      act(() => {
        fireEvent.click(tileA);
      });

      act(() => {
        fireEvent.click(tileA);
      });

      act(() => {
        fireEvent.click(tileB);
      });

      act(() => {
        fireEvent.click(tileB);
      });

      act(() => {
        fireEvent.click(tileB);
      });

      act(() => {
        fireEvent.click(tileC);
      });

      act(() => {
        fireEvent.click(tileC);
      });

      act(() => {
        fireEvent.click(tileD);
      });

      act(() => {
        fireEvent.click(tileD);
      });

      const uiScoreResults = {
        quantity: getAllByTestId('item-quantity').map((q) => q.innerHTML),
        score: getAllByTestId('item-score').map((s) => s.innerHTML),
        bonusAmount: getByTestId('bonus-amount').innerHTML,
        totalAmount: getByTestId('total-amount').innerHTML
      };

      expect(uiScoreResults).toMatchInlineSnapshot(`
        {
          "bonusAmount": "80",
          "quantity": [
            "3",
            "3",
            "2",
            "2",
          ],
          "score": [
            "200",
            "120",
            "40",
            "30",
          ],
          "totalAmount": "390",
        }
      `);
    });
  });

  describe('the game reset functionality', () => {
    test('it should refresh the game correctly', () => {
      const { getByText, getByTestId, container } = render(<TilesGame tiles={TILES} />);

      const tileA = getByText('A');

      act(() => {
        fireEvent.click(tileA);
      });

      act(() => {
        fireEvent.click(tileA);
      });

      act(() => {
        fireEvent.click(tileA);
      });

      act(() => {
        fireEvent.click(tileA);
      });

      expect({
        quantity: getByTestId('item-quantity').innerHTML,
        score: getByTestId('item-score').innerHTML,
        bonusAmount: getByTestId('bonus-amount').innerHTML,
        totalAmount: getByTestId('total-amount').innerHTML
      }).toMatchInlineSnapshot(`
        {
          "bonusAmount": "50",
          "quantity": "4",
          "score": "250",
          "totalAmount": "250",
        }
      `);

      const scoreCta = getByTestId('score-cta');

      act(() => {
        fireEvent.click(scoreCta);
      });

      expect(container.querySelector('item-quantity')).not.toBeInTheDocument();
      expect(container.querySelector('item-score')).not.toBeInTheDocument();

      expect({
        bonusAmount: getByTestId('bonus-amount').innerHTML,
        totalAmount: getByTestId('total-amount').innerHTML
      }).toMatchInlineSnapshot(`
        {
          "bonusAmount": "0",
          "totalAmount": "0",
        }
      `);
    });
  });
});
