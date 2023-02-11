import styled from 'styled-components';
import { FlexContainerProps } from './flex-container.interface';

export const StylesWrapper = styled.div<Omit<FlexContainerProps, 'children'>>`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) => props.flexWrap};
  gap: ${(props) => props.gap}rem;
  margin: ${(props) => props.margin}rem;
  padding: ${(props) => props.padding}rem;
  box-sizing: border-box;
`;
