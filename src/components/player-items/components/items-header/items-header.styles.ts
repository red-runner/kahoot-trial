import styled from 'styled-components';
import { montserratRegularBold } from '../../../../styles';

export const StyledWrapper = styled.div<{ gridTemplateColumns: string }>`
  --grid-height: 2rem;

  ${montserratRegularBold}
  height: var(--grid-height);
  display: grid;
  padding: var(--spacing-s);
  grid-template-rows: var(--grid-height);
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  background-color: #c19cfc;
  justify-items: center;
  align-items: center;
`;
