import { cleanup } from 'react-testing-library';

const target =
  '#root > div > section > div > div:nth-child(1) > div > div:nth-child(2) > div';

// ToDo: its not working
describe('mapbox component', () => {
  afterEach(cleanup);
  it('mapbox ', () => {
    cy.visit('/');
    cy.get(target).click(500, 50);
  });
});
