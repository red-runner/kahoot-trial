import { render } from '@testing-library/react';

import { ItemsHeader } from '../components/items-header';

describe('the `ItemsHeader` component', () => {
  describe('if `fields` is empty', () => {
    test('it should not render the component', () => {
      const { container } = render(<ItemsHeader fields={[]} />);

      const itemsHeader = container.querySelector('[data-testid="items-header"]');

      expect(itemsHeader).not.toBeInTheDocument();
    });
  });

  test('it should render a header with the right fields', () => {
    const fields: [string, string, string] = ['the', 'yellow', 'submarine'];

    const { getByTestId, getByText } = render(<ItemsHeader fields={fields} />);

    const itemsHeader = getByTestId('items-header');
    const styles = window.getComputedStyle(itemsHeader);

    expect(styles.getPropertyValue('grid-template-columns')).toBe('calc(100% / 3) calc(100% / 3) calc(100% / 3)');
    fields.forEach((field) => {
      expect(getByText(field)).toBeInTheDocument();
    });
  });
});
