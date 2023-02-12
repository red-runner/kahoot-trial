import styled from 'styled-components';
import { Layout } from '../layout';

export const StylesWrapper = styled(Layout)`
  --tiles-game-section-box-shadow: -5px 0px 10px 0 rgb(0 0 0 / 5%);

  .tiles-game__section {
    display: grid;
    grid-template-rows: var(--grid-header-height) calc(100vh - var(--grid-header-height));
    grid-template-columns: 100%;
  }

  .tiles-game__section--player-items {
    box-shadow: var(--tiles-game-section-box-shadow);
  }
`;
