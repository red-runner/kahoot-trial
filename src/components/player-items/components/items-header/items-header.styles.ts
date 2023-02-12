import styled from 'styled-components';
import { montserratRegularBold } from '../../../../styles';

export const StyledWrapper = styled.div<{ gridTemplateColumns: string }>`
  --item-header-grid-height: 2rem;
  --item-header-background-color: #c19cfc;

  ${montserratRegularBold}
  height: var(--item-header-grid-height);
  display: grid;
  padding: var(--spacing-s);
  grid-template-rows: var(--item-header-grid-height);
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  background-color: var(--item-header-background-color);
  justify-items: center;
  align-items: center;
`;
