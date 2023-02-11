import { StylesWrapper } from './header.styles';

interface HeaderProps {
  children: string;
}

export const Header = ({ children }: HeaderProps) => {
  return <StylesWrapper data-testid="header">{children}</StylesWrapper>;
};
