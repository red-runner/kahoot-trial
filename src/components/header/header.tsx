import { StylesWrapper } from "./header.styles";

interface HeaderProps {
  children: string;
  onClick?: ({ points, bonus }: { points: number; bonus: number }) => void;
  points?: number;
  bonus?: number;
  backgroundColor: string;
}

export const Header = ({ children }: HeaderProps) => {
  return <StylesWrapper data-testid="header">{children}</StylesWrapper>;
};
