import React from 'react';
import CedarMaps from '@cedarstudios/react-cedarmaps';
import { MapWrapper } from '../../common/mpWrapper';

const accessToken = process.env.REACT_APP_CEDAR_TOKEN;

const {
  RotationControl,
  ZoomControl,
  ScaleControl,
  Marker
} = CedarMaps.getReactMapboxGl();

export const CedarMap = () => {
  return (
    <MapWrapper>
      {({
        viewport,
        // changeViewPort,
        markerCords
        // isRenderMarker,
        // changeIsRenderMarker
      }) => {
        const { lat, long } = markerCords;
        const { latitude, longitude } = viewport;
        return (
          <CedarMaps
            containerStyle={{
              height: viewport.height,
              width: viewport.width
            }}
            token={accessToken}
            center={[longitude, latitude]}
            minZoom={viewport.zoom}
          >
            <RotationControl />
            <ZoomControl />
            <ScaleControl />
            <Marker coordinates={[long, lat]}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg"
                alt=""
                className="pin_icon"
              />
            </Marker>
          </CedarMaps>
        );
      }}
    </MapWrapper>
  );
};
