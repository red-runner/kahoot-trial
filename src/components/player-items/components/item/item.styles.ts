import styled from 'styled-components';

export const StylesWrapper = styled.div`
  --grid-column-size: calc(100% / 3);
  --grid-row-size: 3rem;

  color: var(--white);
  width: 100%;
  padding: 0 var(--spacing-s);
  display: grid;
  grid-template-columns: var(--grid-column-size) var(--grid-column-size) var(--grid-column-size);
  grid-template-rows: var(--grid-row-size);
  justify-items: center;
  align-items: center;
  box-sizing: border-box;
`;
