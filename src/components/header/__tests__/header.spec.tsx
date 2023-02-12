import { render } from '@testing-library/react';
import { Header } from '../header';

describe('the `Header` component', () => {
  describe('by default', () => {
    test('it should render with the right children', () => {
      const TEXT = 'Green Onions';

      const { getByTestId, getByText } = render(<Header>{TEXT}</Header>);

      const header = getByTestId('header');
      const headerText = getByText(TEXT);

      expect(header).toBeInTheDocument();
      expect(headerText).toBeInTheDocument();
    });
  });

  describe('if `children` is not defined', () => {
    test('it should not render the `Header` component', () => {
      const { container } = render(<Header>{undefined}</Header>);

      const header = container.querySelector('[data-testid="header"]');

      expect(header).not.toBeInTheDocument();
    });
  });
});
