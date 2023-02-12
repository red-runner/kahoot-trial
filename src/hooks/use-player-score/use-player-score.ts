import { useReducer } from 'react';
import { GameAction, GameState } from './use-player-score.interface';

export const usePlayerScore = () => {
  const defaultState = {
    tiles: [],
    playerItems: [],
    total: 0,
    bonus: 0
  };

  const gameReducer = (state: GameState, action: GameAction): GameState => {
    switch (action.type) {
      case 'add.player.item':
        return {
          ...state,
          playerItems: action.payload
        };
      case 'add.bonus':
        return {
          ...state,
          bonus: action.payload
        };
      case 'add.total':
        return {
          ...state,
          total: action.payload
        };

      case 'reset':
        return defaultState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(gameReducer, defaultState);

  return { state, dispatch };
};
