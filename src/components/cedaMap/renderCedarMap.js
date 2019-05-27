import React from 'react';
import PropTypes from 'prop-types';
import CedarMaps from '@cedarstudios/react-cedarmaps';

const {
  RotationControl,
  ZoomControl,
  ScaleControl,
  Marker
} = CedarMaps.getReactMapboxGl();

export const RenderCedarMap = ({
  viewport,
  changeViewPortFiled,
  changeIsRenderMarker,
  markerCords,
  token
}) => {
  const { longitude, latitude } = viewport;
  const { long, lat } = markerCords;

  const handClick = (map, evt) => {
    changeIsRenderMarker(true);
    changeViewPortFiled('latitude', evt.lngLat.lat);
    changeViewPortFiled('longitude', evt.lngLat.lng);
  };

  return (
    <div className="ts__mapbox">
      <CedarMaps
        containerStyle={{
          height: viewport.height,
          width: viewport.width
        }}
        token={token}
        center={[longitude, latitude]}
        minZoom={viewport.zoom}
        onClick={handClick}
      >
        <RotationControl />
        <ZoomControl />
        <ScaleControl />
        <Marker
          coordinates={[long, lat]}
          onClick={() => changeIsRenderMarker(false)}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg"
            alt=""
            className="pin_icon"
          />
        </Marker>
      </CedarMaps>
      <div className="ts__result">
        <h3>Marker position</h3>
        <p>
          latitude: <span>{lat}</span>
        </p>
        <p>
          longitude: <span>{lat}</span>
        </p>
      </div>
    </div>
  );
};

RenderCedarMap.propTypes = {
  viewport: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number
  }).isRequired,
  changeIsRenderMarker: PropTypes.func.isRequired,
  markerCords: PropTypes.shape({
    lat: PropTypes.number,
    long: PropTypes.number
  }).isRequired,
  token: PropTypes.string.isRequired
};
