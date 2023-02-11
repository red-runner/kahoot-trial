import { Header, Layout, Tile, TileProps, FlexContainer, PlayerItems } from './components';

const tilesMock: TileProps[] = [
  {
    children: 'A',
    backgroundColor: 'red'
  },
  {
    children: 'B',
    backgroundColor: 'blue'
  },
  {
    children: 'C',
    backgroundColor: 'purple'
  },
  {
    children: 'D',
    backgroundColor: 'green'
  },
  {
    children: 'A',
    backgroundColor: 'red'
  },
  {
    children: 'B',
    backgroundColor: 'blue'
  },
  {
    children: 'C',
    backgroundColor: 'purple'
  },
  {
    children: 'D',
    backgroundColor: 'green'
  },
  {
    children: 'A',
    backgroundColor: 'red'
  },
  {
    children: 'B',
    backgroundColor: 'blue'
  },
  {
    children: 'C',
    backgroundColor: 'purple'
  },
  {
    children: 'D',
    backgroundColor: 'green'
  },
  {
    children: 'A',
    backgroundColor: 'red'
  },
  {
    children: 'B',
    backgroundColor: 'blue'
  },
  {
    children: 'C',
    backgroundColor: 'purple'
  },
  {
    children: 'D',
    backgroundColor: 'green'
  },
  {
    children: 'A',
    backgroundColor: 'red'
  },
  {
    children: 'B',
    backgroundColor: 'blue'
  },
  {
    children: 'C',
    backgroundColor: 'purple'
  },
  {
    children: 'D',
    backgroundColor: 'green'
  },
  {
    children: 'A',
    backgroundColor: 'red'
  },
  {
    children: 'B',
    backgroundColor: 'blue'
  },
  {
    children: 'C',
    backgroundColor: 'purple'
  },
  {
    children: 'D',
    backgroundColor: 'green'
  }
];

export const App = () => {
  return (
    <Layout className="game">
      <section className="game__section game__section--tiles" data-testid="tile-section">
        <Header>Kahoot Rocks</Header>
        <FlexContainer style={{ overflow: 'auto' }} gap={1} padding={1}>
          {tilesMock?.map((tile, index) => (
            <Tile key={index} backgroundColor={tile.backgroundColor}>
              {tile?.children}
            </Tile>
          ))}
        </FlexContainer>
      </section>
      <section className="game__section game__section--player-items" data-testid="player-item-section">
        <Header>Kahoot psss</Header>
        <PlayerItems
          items={[
            { tile: { children: 'A', backgroundColor: 'red' }, quantity: 40, score: 200 },
            { tile: { children: 'B', backgroundColor: 'green' }, quantity: 40, score: 200 },
            { tile: { children: 'C', backgroundColor: 'purple' }, quantity: 40, score: 200 }
          ]}
          itemsHeader={['Item', 'Qty', 'Score']}
        />
      </section>
    </Layout>
  );
};

export default App;
