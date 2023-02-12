import { FC } from 'react';
import { StylesWrapper } from './layout.styles';
import { LayoutProps } from './layout.interface';

export const Layout: FC<LayoutProps> = ({ children, className }) => {
  if (!children) {
    return null;
  }

  return (
    <StylesWrapper className={className} data-testid="layout">
      {children}
    </StylesWrapper>
  );
};
