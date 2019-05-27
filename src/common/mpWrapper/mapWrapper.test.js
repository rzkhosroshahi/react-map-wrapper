import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import { MapWrapper } from './index';

describe('MapWrapper component', () => {
  afterEach(cleanup);
  test('viewport state', () => {
    const viewportProp = {
      width: 400,
      height: 500,
      latitude: 1234,
      longitude: 12345,
      zoom: 8
    };
    const { getByTestId } = render(
      <MapWrapper viewport={viewportProp}>
        {({ viewport }) => (
          <div>
            <p data-testid="width">{viewport.width}</p>
            <p data-testid="latitude">{viewport.latitude}</p>
          </div>
        )}
      </MapWrapper>
    );

    const widthNode = getByTestId('width');
    const latitudeNode = getByTestId('latitude');
    expect(widthNode.textContent).toBe(viewportProp.width.toString());
    expect(latitudeNode.textContent).toBe(viewportProp.latitude.toString());
  });

  test('change viewPort state', () => {
    const newViewPort = {
      width: 400,
      height: 500,
      latitude: 1234,
      longitude: 12345,
      zoom: 8
    };
    const { getByTestId } = render(
      <MapWrapper>
        {({ viewport, changeViewPort }) => (
          <div>
            <button
              data-testid="change-btn"
              type="button"
              onClick={() => changeViewPort(newViewPort)}
            >
              click to change view port state
            </button>
            <p data-testid="latitude">{viewport.latitude}</p>
          </div>
        )}
      </MapWrapper>
    );

    const changeBtn = getByTestId('change-btn');
    const latitudeNode = getByTestId('latitude');

    fireEvent.click(changeBtn);
    expect(latitudeNode.textContent).toBe(newViewPort.latitude.toString());
  });

  test('change viewPort state by field', () => {
    const { getByTestId } = render(
      <MapWrapper>
        {({ viewport, changeViewPortFiled }) => (
          <div>
            <button
              data-testid="change-btn"
              type="button"
              onClick={() => changeViewPortFiled('latitude', 12345)}
            >
              click to change view port state
            </button>
            <p data-testid="latitude">{viewport.latitude}</p>
          </div>
        )}
      </MapWrapper>
    );

    const changeBtn = getByTestId('change-btn');
    const latitudeNode = getByTestId('latitude');

    fireEvent.click(changeBtn);
    expect(latitudeNode.textContent).toBe('12345');
  });
});

describe('MapWrapper component Marker state', () => {
  afterEach(cleanup);
  test('should not to rendering marker when isRenderMarker is false ', () => {
    const { getByTestId } = render(
      <MapWrapper>
        {({ isRenderMarker }) => (
          <div>
            {isRenderMarker && <p data-testid="render_markers">render maker</p>}
          </div>
        )}
      </MapWrapper>
    );
    function isRendering() {
      getByTestId('render_markers');
    }
    expect(isRendering).toThrowError();
  });

  test('changeIsRenderMarker ', () => {
    const { getByTestId } = render(
      <MapWrapper>
        {({ isRenderMarker, changeIsRenderMarker }) => (
          <div>
            <button
              data-testid="change-btn"
              type="button"
              onClick={() => changeIsRenderMarker(true)}
            >
              click to change isRendering
            </button>
            {isRenderMarker && <p data-testid="render_markers">render maker</p>}
          </div>
        )}
      </MapWrapper>
    );
    const changeBtn = getByTestId('change-btn');
    fireEvent.click(changeBtn);

    function isRendering() {
      getByTestId('render_markers');
    }
    expect(isRendering).not.toThrowError();
  });
});
