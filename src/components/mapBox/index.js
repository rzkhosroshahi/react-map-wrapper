import React from 'react';
import { MapWrapper } from '../../common/mapWrapper';
import { RenderMapBox } from './renderMapBox';

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
      {wrapperProps => <RenderMapBox token={accessToken} {...wrapperProps} />}
    </MapWrapper>
  );
};
