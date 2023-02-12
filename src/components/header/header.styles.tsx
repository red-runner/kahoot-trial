import styled from 'styled-components';
import { montserratRegularBold } from '../../styles';

export const StylesWrapper = styled.div`
  --header-box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2);
  --header-height: 3rem;

  ${montserratRegularBold}

  align-items: center;
  background-color: var(--primary);
  color: var(--white);
  display: flex;
  height: var(--header-height);
  padding-left: var(--spacing-l);
  width: 100%;
  box-shadow: var(--header-box-shadow);
  box-sizing: border-box;
`;
