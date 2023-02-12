import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /**Achromatic */
    --white: #ffffff;
    --black: #000000;

    /**Colors */
    --primary: #45178e;
    --secondary: #ffe949;

    /** Spacings */
    --spacing-xxs: 0.25rem;
    --spacing-xs: 0.5rem;
    --spacing-s: 0.75rem;
    --spacing-md: 1rem;
    --spacing-l: 1.25rem;
    --spacing-xl: 1.5rem;
    --spacing-xxl: 2rem;
    --spacing-xxxl: 2.25rem;
    --spacing-jumbo: 2.5rem;
    --spacing-xjumbo: 3rem;
    --spacing-xxjumbo: 3.5rem;
    --spacing-xxxjumbo: 4rem;
    --spacing-mega: 4.5rem;
    --spacing-giga: 7rem;

    /** Borders */
    --border-radius: 6px;
  }

    body {
    margin: 0;
    --font-size: 1rem;
    --line-height: 1.5;
    font-size: var(--font-size);
    line-height: var(--line-height);
    font-weight: 400;
    font-family: Montserrat, -apple-system, blinkmacsystemfont, avenir next, avenir, segoe ui, helvetica neue, helvetica,
      ubuntu, roboto, noto, arial, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol;
    background: #333333;
  }
`;
