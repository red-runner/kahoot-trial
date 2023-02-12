import { render } from '@testing-library/react';
import { FlexContainer } from '../flex-container';

describe('the `FlexContainer` component', () => {
  describe('by default', () => {
    test('it should render a flex container with the right children', () => {
      const { getByTestId } = render(
        <FlexContainer>
          <div data-testid="pop.corn" />
        </FlexContainer>
      );

      const container = getByTestId('flex-container');
      const children = getByTestId('pop.corn');

      const styles = window.getComputedStyle(container);

      const propStyles = {
        justifyContent: styles.getPropertyValue('justify-content'),
        alignItems: styles.getPropertyValue('align-items'),
        flexWrap: styles.getPropertyValue('flex-wrap'),
        flexDirection: styles.getPropertyValue('flex-direction'),
        flexGrow: styles.getPropertyValue('flex-grow'),
        gap: styles.getPropertyValue('gap'),
        margin: styles.getPropertyValue('margin'),
        padding: styles.getPropertyValue('padding')
      };

      expect(container).toBeInTheDocument();
      expect(children).toBeInTheDocument();
      expect(propStyles).toMatchInlineSnapshot(`
        {
          "alignItems": "flex-start",
          "flexDirection": "row",
          "flexGrow": "0",
          "flexWrap": "wrap",
          "gap": "0rem",
          "justifyContent": "flex-start",
          "margin": "0rem",
          "padding": "0rem",
        }
      `);
    });
  });

  describe('if `children` is undefined', () => {
    test('it should not render the component', () => {
      const { container } = render(<FlexContainer>{undefined}</FlexContainer>);
      const flexContainer = container.querySelector('[data-testid="flex-container"]');

      expect(flexContainer).not.toBeInTheDocument();
    });
  });

  describe('if the component has inline styles', () => {
    test('they should be applied to the flex-container', () => {
      const { getByTestId } = render(
        <FlexContainer style={{ backgroundColor: 'purple' }}>
          <div data-testid="pop.corn" />
        </FlexContainer>
      );

      const flexContainer = getByTestId('flex-container');

      expect(flexContainer.style).toMatchInlineSnapshot(`
        CSSStyleDeclaration {
          "0": "background-color",
          "_importants": {
            "background-color": undefined,
          },
          "_length": 1,
          "_onChange": [Function],
          "_values": {
            "background-color": "purple",
          },
        }
      `);
    });
  });

  describe('the component flexbox props', () => {
    test('they should apply the right styles', () => {
      const { getByTestId } = render(
        <FlexContainer
          justifyContent="center"
          alignItems="flex-end"
          flexWrap="nowrap"
          flexDirection="column"
          flexGrow="1"
          gap={1}
          margin={2}
          padding={3}
        >
          <div data-testid="pop.corn" />
        </FlexContainer>
      );

      const flexContainer = getByTestId('flex-container');

      const styles = window.getComputedStyle(flexContainer);

      const propStyles = {
        justifyContent: styles.getPropertyValue('justify-content'),
        alignItems: styles.getPropertyValue('align-items'),
        flexWrap: styles.getPropertyValue('flex-wrap'),
        flexDirection: styles.getPropertyValue('flex-direction'),
        flexGrow: styles.getPropertyValue('flex-grow'),
        gap: styles.getPropertyValue('gap'),
        margin: styles.getPropertyValue('margin'),
        padding: styles.getPropertyValue('padding')
      };

      expect(propStyles).toMatchInlineSnapshot(`
        {
          "alignItems": "flex-end",
          "flexDirection": "column",
          "flexGrow": "1",
          "flexWrap": "nowrap",
          "gap": "1rem",
          "justifyContent": "center",
          "margin": "2rem",
          "padding": "3rem",
        }
      `);
    });
  });
});
