import React from 'react';
import { MapWrapper } from '../../common/mapWrapper';
import { RenderCedarMap } from './renderCedarMap';

const accessToken = process.env.REACT_APP_CEDAR_TOKEN;

export const CedarMap = () => {
  return (
    <MapWrapper>
      {wrapperProps => <RenderCedarMap token={accessToken} {...wrapperProps} />}
    </MapWrapper>
  );
};
