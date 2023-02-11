import { ReactNode, FC } from 'react';
import { StylesWrapper } from './layout.styles';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout: FC<LayoutProps> = ({ children, className }) => {
  return (
    <StylesWrapper className={className} data-testid="layout">
      {children}
    </StylesWrapper>
  );
};
