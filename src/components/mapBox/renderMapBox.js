import React from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const RenderMapBox = ({
  viewport,
  changeViewPort,
  changeIsRenderMarker,
  markerCords,
  isRenderMarker,
  token
}) => {
  const { lat, long } = markerCords;
  const handClick = () => {
    changeIsRenderMarker(!isRenderMarker);
  };
  return (
    <div className="ts__mapbox">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={token}
        onViewportChange={view => changeViewPort(view)}
        mapStyle="mapbox://styles/mapbox/light-v9"
        onClick={() => handClick()}
      >
        <Marker latitude={lat} longitude={long}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg"
            alt=""
          />
        </Marker>
      </ReactMapGL>

      <div className="ts__result">
        <h3>Marker position</h3>
        <p>
          latitude: <span>{lat}</span>
        </p>
        <p>
          longitude: <span>{lat}</span>
        </p>
        <br />
        <h4>Guide</h4>
        <p>after click on map marker show up</p>
        <p>for updating lat,lng you just dragging on the map</p>
        <p>for remove marker you can click on the map again</p>
      </div>
    </div>
  );
};

RenderMapBox.propTypes = {
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
