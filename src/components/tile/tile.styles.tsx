import styled from 'styled-components';
import { montserratRegularDisplay } from '../../styles';

export const StylesWrapper = styled.div<{ backgroundColor: string; role?: string }>`
  ${montserratRegularDisplay}

  height: 16rem;
  width: 16rem;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  cursor: ${(props) => (props.role === 'button' ? 'pointer' : 'default')};
`;
