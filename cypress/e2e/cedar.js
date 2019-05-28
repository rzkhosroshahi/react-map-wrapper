import { cleanup } from 'react-testing-library';

const target =
  '#root > div > section > div > div.mapboxgl-map > div.mapboxgl-canvas-container.mapboxgl-interactive.mapboxgl-touch-drag-pan.mapboxgl-touch-zoom-rotate > canvas';
describe('mapbox component', () => {
  afterEach(cleanup);
  it('cedar map change marker location with click on map', () => {
    cy.visit('/cedar');
    cy.get(target)
      .click(500, 50)
      .getAllByTestId('lat')
      .should('not.equal', 0)
      .get(target)
      .click(400, 50)
      .getAllByTestId('lat')
      .should('not.equal', 0)
      .get(target)
      .click(500, 150)
      .getAllByTestId('lat')
      .should('not.equal', 0)
      .get(target)
      .click(450, 300)
      .getAllByTestId('lat')
      .should('not.equal', 0);
  });

  it('disappear cedar map marker after click on it', () => {
    const markerTarget = "#root > div > section > div > div.mapboxgl-map > div.mapboxgl-marker";
    cy.visit('/cedar');
    cy.get(target)
      .click(500, 50);
    cy.get(markerTarget)
      .click()
      .should('not.be.visible');
  });
});
