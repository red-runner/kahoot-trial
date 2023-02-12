import React from 'react';
import { createRoot } from 'react-dom/client';

import { GlobalStyles } from './styles';
import { TilesGame } from './components';
import { TILES } from './constants';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <TilesGame tiles={TILES} />
  </React.StrictMode>
);
