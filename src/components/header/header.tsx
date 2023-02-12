import { StylesWrapper } from './header.styles';
import { HeaderProps } from './header.interface';
import { FC } from 'react';

export const Header: FC<HeaderProps> = ({ children }: HeaderProps) => {
  if (!children) {
    return null;
  }

  return <StylesWrapper data-testid="header">{children}</StylesWrapper>;
};
