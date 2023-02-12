import { render } from '@testing-library/react';
import { Layout } from '../layout';

describe('the `Layout` component', () => {
  describe('by default', () => {
    test('it should render the component with the right children', () => {
      const { getByTestId } = render(
        <Layout>
          <div data-testid="gamesofluck" />
        </Layout>
      );

      const layout = getByTestId('layout');
      const layoutChildren = getByTestId('gamesofluck');

      expect(layout).toBeInTheDocument();
      expect(layoutChildren).toBeInTheDocument();
    });
  });

  describe('if `children` is not defined', () => {
    test('it should not render the component', () => {
      const { container } = render(<Layout>{undefined}</Layout>);

      const layout = container.querySelector('[data-testid="layout"]');

      expect(layout).not.toBeInTheDocument();
    });
  });

  describe('the `className` prop is populated', () => {
    test('it should be properly passed to the layout', () => {
      const { getByTestId } = render(
        <Layout className="deep-purple">
          <div data-testid="gamesofluck" />
        </Layout>
      );

      const layout = getByTestId('layout');

      expect(layout).toHaveClass('deep-purple');
    });
  });
});
