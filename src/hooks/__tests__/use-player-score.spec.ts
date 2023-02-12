import { usePlayerScore } from '../use-player-score';
import { renderHook, act } from '@testing-library/react';

describe('the `usePlayerScore` custom hook', () => {
  describe('the hook initial state', () => {
    test('it should return the right default values', () => {
      const { result } = renderHook(() => usePlayerScore());

      expect(result.current.state).toMatchInlineSnapshot(`
        {
          "bonus": 0,
          "playerItems": [],
          "tiles": [],
          "total": 0,
        }
      `);
    });
  });

  describe('the `add.player.item` action', () => {
    test('it should add the right item to state', () => {
      const { result } = renderHook(() => usePlayerScore());

      act(() => {
        result.current.dispatch({
          type: 'add.player.item',
          payload: [{ tile: { children: 'queen', backgroundColor: 'beige' }, score: 9, points: 19 }]
        });
      });

      expect(result.current.state).toMatchInlineSnapshot(`
        {
          "bonus": 0,
          "playerItems": [
            {
              "points": 19,
              "score": 9,
              "tile": {
                "backgroundColor": "beige",
                "children": "queen",
              },
            },
          ],
          "tiles": [],
          "total": 0,
        }
      `);
    });
  });

  describe('the `add.bonus` action', () => {
    test('it should add the right bonus', () => {
      const { result } = renderHook(() => usePlayerScore());

      act(() => {
        result.current.dispatch({
          type: 'add.bonus',
          payload: 888
        });
      });

      expect(result.current.state).toMatchInlineSnapshot(`
        {
          "bonus": 888,
          "playerItems": [],
          "tiles": [],
          "total": 0,
        }
      `);
    });
  });

  describe('the `add.total` action', () => {
    test('it should add the right bonus', () => {
      const { result } = renderHook(() => usePlayerScore());

      act(() => {
        result.current.dispatch({
          type: 'add.player.item',
          payload: [{ tile: { children: 'queen', backgroundColor: 'beige' }, score: 9, points: 19 }]
        });
      });

      expect(result.current.state).toMatchInlineSnapshot(`
        {
          "bonus": 0,
          "playerItems": [
            {
              "points": 19,
              "score": 9,
              "tile": {
                "backgroundColor": "beige",
                "children": "queen",
              },
            },
          ],
          "tiles": [],
          "total": 0,
        }
      `);
    });
  });

  describe('the `reset` action', () => {
    test('it should add the right bonus', () => {
      const { result } = renderHook(() => usePlayerScore());

      act(() => {
        result.current.dispatch({
          type: 'add.total',
          payload: 999
        });
      });

      expect(result.current.state).toMatchInlineSnapshot(`
        {
          "bonus": 0,
          "playerItems": [],
          "tiles": [],
          "total": 999,
        }
      `);

      act(() => {
        result.current.dispatch({
          type: 'reset'
        });
      });

      expect(result.current.state).toMatchInlineSnapshot(`
        {
          "bonus": 0,
          "playerItems": [],
          "tiles": [],
          "total": 0,
        }
      `);
    });
  });
});
