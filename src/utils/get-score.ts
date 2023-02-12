export const getScore = ({
  quantity,
  multiple,
  bonusPoints,
  points
}: {
  quantity: number;
  multiple?: number;
  bonusPoints?: number;
  points: number;
}) => {
  if (!bonusPoints || !multiple) {
    return quantity * points;
  }

  const amountOfBonus = Math.floor(quantity / multiple);
  const remainder = quantity % multiple;

  return amountOfBonus * bonusPoints + remainder * points;
};
