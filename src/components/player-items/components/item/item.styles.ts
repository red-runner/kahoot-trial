import styled from 'styled-components';

export const StylesWrapper = styled.div`
  --item-grid-column-size: calc(100% / 3);
  --item-grid-row-size: 3rem;

  color: var(--white);
  width: 100%;
  padding: 0 var(--spacing-s);
  display: grid;
  grid-template-columns: var(--item-grid-column-size) var(--item-grid-column-size) var(--item-grid-column-size);
  grid-template-rows: var(--item-grid-row-size);
  justify-items: center;
  align-items: center;
  box-sizing: border-box;
`;
