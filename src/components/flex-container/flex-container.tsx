import { FC } from 'react';

import { FlexContainerProps } from './flex-container.interface';
import { StylesWrapper } from './flex-container.styles';

export const FlexContainer: FC<FlexContainerProps> = ({
  children,
  style,
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  flexWrap = 'wrap',
  gap = 0,
  margin = 0,
  padding = 0
}) => {
  return (
    <StylesWrapper
      style={style}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      gap={gap}
      margin={margin}
      padding={padding}
      data-testid="flex-container"
    >
      {children}
    </StylesWrapper>
  );
};
