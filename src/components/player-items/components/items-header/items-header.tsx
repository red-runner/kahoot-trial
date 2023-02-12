import { FC } from 'react';
import { ItemsHeaderProps } from './items-header.interface';
import { StyledWrapper } from './items-header.styles';

export const ItemsHeader: FC<ItemsHeaderProps> = ({ fields }) => {
  if (!fields.length) {
    return null;
  }

  const gridTemplateColumns = fields
    .reduce<string[]>((acc) => {
      acc.push(`calc(100% / ${fields.length})`);

      return acc;
    }, [])
    .join(' ');

  return (
    <StyledWrapper className="items-header" data-testid="items-header" gridTemplateColumns={gridTemplateColumns}>
      {fields.map((field, index) => (
        <span className="items-header__field" key={index}>
          {field}
        </span>
      ))}
    </StyledWrapper>
  );
};
