import styled from 'styled-components';

export const StylesWrapper = styled.main`
  --grid-sidebar-width: 18.75rem;
  --grid-header-height: 3rem;

  display: grid;
  grid-template-columns: calc(100vw - var(--grid-sidebar-width)) var(--grid-sidebar-width);
  grid-template-rows: 100vh;
`;
