import styled from 'styled-components';
import { montserratRegularDisplay } from '../../styles';

export const StylesWrapper = styled.div<{ backgroundColor: string; role?: string }>`
  --tile-size: 16rem;
  --tile-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);

  ${montserratRegularDisplay}

  height: var(--tile-size);
  width: var(--tile-size);
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  border-radius: var(--border-radius);
  cursor: ${(props) => (props.role === 'button' ? 'pointer' : 'default')};
`;
