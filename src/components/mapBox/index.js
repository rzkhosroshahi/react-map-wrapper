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
      {({
        viewport,
        changeViewPort,
        markerCords,
        isRenderMarker,
        changeIsRenderMarker
      }) => {
        const { lat, long } = markerCords;
        return (
          <div className="ts__mapbox">
            <ReactMapGL
              {...viewport}
              mapboxApiAccessToken={accessToken}
              onViewportChange={view => changeViewPort(view)}
              mapStyle="mapbox://styles/mapbox/light-v9"
              onClick={() => changeIsRenderMarker(!isRenderMarker)}
            >
              {isRenderMarker && (
                <Marker latitude={lat} longitude={long}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg"
                    alt=""
                  />
                </Marker>
              )}
            </ReactMapGL>

            <div className="ts__result">
              <h3>Marker position</h3>
              <p>
                latitude: <span>{lat}</span>
              </p>
              <p>
                longitude: <span>{lat}</span>
              </p>
              <br/>
              <h4>Guide</h4>
              <p>after click on map marker show up</p>
              <p>for updating lat,lng you just dragging on the map</p>
              <p>for remove marker you can click on the map again</p>
            </div>
          </div>
        );
      }}
    </MapWrapper>
  );
};
