import styled from 'styled-components';
import { montserratRegularBold } from '../../styles';

export const StylesWrapper = styled.div`
  --player-items-grid-row-size-bonus: 4rem;
  --player-items-grid-column-size-bonus: calc(100% / 3) calc(100% / 3) calc(100% / 3);

  --player-items-grid-row-size-score: 2rem 4 rem;
  --player-items-grid-column-size-score: calc(100% / 3) calc(100% / 3 * 2);
  --player-items-text-color: var(--white);
  --player-items-background-color: var(--primary);
  --player-items-box-shadow: 0 2px 15px 0 rgb(0 0 0 / 20%);
  --player-items-button-background-color: var(--secondary);

  display: flex;
  flex-direction: column;

  .player-items__bonus {
    color: var(--player-items-text-color);
    display: grid;
    padding: var(--spacing-s);
    grid-template-columns: var(--player-items-grid-column-size-bonus);
    grid-template-rows: var(--player-items-grid-row-size-bonus);
    justify-items: center;
    align-items: center;
    background-color: var(--player-items-background-color);
    box-shadow: var(--player-items-box-shadow);
  }

  .player-items__score {
    color: var(--player-items-text-color);
    display: grid;
    padding: var(--spacing-s);
    grid-template-columns: var(--player-items-grid-column-size-score);
    grid-template-rows: var(--player-items-grid-row-size-score);
    justify-items: center;
    align-items: center;
    background-color: var(--player-items-background-color);
    box-shadow: var(--player-items-box-shadow);
  }

  .bonus__title,
  .score-total {
    width: 100%;
  }

  .bonus__title,
  .score-total__title {
    ${montserratRegularBold}
  }

  .score__cta {
    ${montserratRegularBold}

    border: none;
    padding: var(--spacing-md);
    background-color: var(--player-items-button-background-color);
    box-shadow: 5px 5px 0 0 #423d16;
    border-radius: var(--border-radius);
    cursor: pointer;
  }
`;
