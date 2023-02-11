import { StylesWrapper } from "./tile.styles";

interface TileProps {
  children: string;
  onClick?: ({ points, bonus }: { points: number; bonus: number }) => void;
  points?: number;
  bonus?: number;
  backgroundColor: string;
}

export const Tile = ({
  children,
  onClick,
  points,
  bonus,
  backgroundColor = "#45178e",
}: TileProps) => {
  let role;

  if (onClick) {
    role = "button";
  }

  return (
    <StylesWrapper
      data-testid="tile"
      backgroundColor={backgroundColor}
      role={role}
      onClick={() => {
        onClick && points && bonus && onClick({ points, bonus });
      }}
    >
      {children}
    </StylesWrapper>
  );
};
