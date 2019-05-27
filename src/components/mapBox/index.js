import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapWrapper } from '../../common/mpWrapper';

const accessToken = process.env.REACT_APP_MAP_BOX_KEY;

export const MapBox = () => {
  return (
    <MapWrapper
      viewport={{
        width: 800,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 14
      }}
    >
      {({ viewport, changeViewPort }) => {
        const { latitude, longitude } = viewport;
        return (
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={accessToken}
            onViewportChange={view => changeViewPort(view)}
            mapStyle="mapbox://styles/mapbox/light-v9"
          >
            <Marker latitude={latitude} longitude={longitude}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg"
                alt=""
              />
            </Marker>
          </ReactMapGL>
        );
      }}
    </MapWrapper>
  );
};
