import { FC, useLayoutEffect } from 'react';

import { PlayerItem, usePlayerScore } from '../../hooks';
import { getScore } from '../../utils';
import { KAHOOT_GAME_HEADER, KAHOOT_PLAYER_HEADER, NEW_GAME, SCORE_HEADER_ITEMS } from '../../constants';
import { Header } from '../header';
import { FlexContainer } from '../flex-container';
import { Tile } from '../tile';
import { PlayerItems } from '../player-items';
import { StylesWrapper } from './tiles-game.styles';
import { TilesGameProps } from './tiles-game.interface';

export const TilesGame: FC<TilesGameProps> = ({ tiles }) => {
  const { state, dispatch } = usePlayerScore();

  const handleTileClick = ({
    title,
    points,
    bonus,
    backgroundColor
  }: {
    title: string;
    points: number;
    bonus?: { points: number; multiple: number };
    backgroundColor: string;
  }) => {
    const { points: bonusPoints, multiple } = bonus || {};

    const doesTileExist: boolean = state.playerItems.findIndex((item) => item.tile.children === title) >= 0;

    if (!state.playerItems.length) {
      const score = getScore({ quantity: 1, multiple, bonusPoints, points });

      dispatch({
        type: 'add.player.item',
        payload: [{ tile: { children: title, backgroundColor }, score, quantity: 1, points }]
      });

      return;
    }

    if (!doesTileExist) {
      const score = getScore({ quantity: 1, multiple, bonusPoints, points });
      const item: PlayerItem = { tile: { children: title, backgroundColor }, score, quantity: 1, points };

      dispatch({
        type: 'add.player.item',
        payload: [...state.playerItems, item]
      });
      return;
    }

    const playerItems = state?.playerItems.reduce<PlayerItem[]>((acc, current) => {
      if (current.tile.children === title) {
        const quantity: number = current.quantity || 0;

        const score = getScore({ quantity: quantity + 1, multiple, bonusPoints, points });
        const item = { ...current, score, quantity: quantity + 1, points };

        acc.push(item);
      } else {
        acc.push(current);
      }

      return acc;
    }, []);

    dispatch({
      type: 'add.player.item',
      payload: playerItems
    });
  };

  useLayoutEffect(() => {
    const result = state.playerItems.reduce(
      (acc, current) => {
        const quantity: number = current.quantity || 0;
        const score: number = current.score || 0;

        const basePoints = current.points * quantity;
        const bonusPoints = score - basePoints;

        acc.total = acc.total + score;
        acc.bonus = acc.bonus + bonusPoints;

        return acc;
      },
      { total: 0, bonus: 0 }
    );

    dispatch({ type: 'add.total', payload: result.total });
    dispatch({ type: 'add.bonus', payload: result.bonus });
  }, [state.playerItems]);

  return (
    <StylesWrapper className="tiles-game">
      <section className="tiles-game__section game__section--tiles" data-testid="tile-section">
        <Header>{KAHOOT_GAME_HEADER}</Header>
        <FlexContainer
          style={{ overflow: 'auto', height: 'fit-content', maxHeight: 'calc(100vh - 3rem)' }}
          gap={1}
          padding={1}
        >
          {tiles?.map((tile, index) => (
            <Tile
              onClick={() =>
                handleTileClick({
                  title: tile.children,
                  points: tile.points,
                  bonus: tile.bonus,
                  backgroundColor: tile.backgroundColor
                })
              }
              key={index}
              backgroundColor={tile.backgroundColor}
            >
              {tile?.children}
            </Tile>
          ))}
        </FlexContainer>
      </section>
      <section className="tiles-game__section game__section--player-items" data-testid="player-item-section">
        <Header>{KAHOOT_PLAYER_HEADER}</Header>
        <PlayerItems
          bonus={state.bonus}
          total={state.total}
          cta={{
            text: NEW_GAME,
            onClick: () => dispatch({ type: 'reset' })
          }}
          items={state.playerItems}
          itemsHeader={SCORE_HEADER_ITEMS}
        />
      </section>
    </StylesWrapper>
  );
};
