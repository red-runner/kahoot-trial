import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { GlobalStyles } from './styles';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
