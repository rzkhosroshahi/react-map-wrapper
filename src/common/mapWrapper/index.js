import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  defaultViewPort,
  isRenderingDefault,
  updateObjectField
} from '../../utils';

export class MapWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewport: props.viewport,
      markerCords: props.markerCords,
      isRenderMarker: isRenderingDefault(props.markerCords)
    };

    this.setViewPortState = this.setViewPortState.bind(this);
    this.setViewPortStateField = this.setViewPortStateField.bind(this);
    this.setIsRenderMarker = this.setIsRenderMarker.bind(this);
    this.setMarkerCords = this.setMarkerCords.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { viewport, isRenderMarker } = this.state;

    // update marker cords when viewport cords is change
    if (isRenderMarker && prevState.viewport.latitude !== viewport.latitude) {
      const {
        viewport: { latitude, longitude }
      } = this.state;
      this.setMarkerCords(latitude, longitude);
    }

    // update marker cords when isRenderMarker state is change
    if (isRenderMarker && prevState.isRenderMarker !== isRenderMarker) {
      const {
        viewport: { latitude, longitude }
      } = this.state;
      this.setMarkerCords(latitude, longitude);
    }

    // after renderMarker getting to be false restore marker cords state to default
    if (!isRenderMarker && prevState.isRenderMarker !== isRenderMarker) {
      this.setMarkerCords(0, 0);
    }
  }

  setViewPortState(view) {
    this.setState({
      viewport: view
    });
  }

  setViewPortStateField(field, value) {
    const { viewport } = this.state;
    this.setState({
      viewport: updateObjectField(viewport, field, value)
    });
  }

  setIsRenderMarker(bool) {
    this.setState({
      isRenderMarker: bool
    });
  }

  setMarkerCords(lat, long) {
    this.setState({
      markerCords: {
        lat,
        long
      }
    });
  }

  render() {
    const { viewport, markerCords, isRenderMarker } = this.state;
    const { children } = this.props;
    return (
      <section className="map_wrapper">
        {children({
          viewport,
          markerCords,
          isRenderMarker,
          changeViewPort: this.setViewPortState,
          changeViewPortFiled: this.setViewPortStateField,
          changeIsRenderMarker: this.setIsRenderMarker
        })}
      </section>
    );
  }
}

MapWrapper.propTypes = {
  viewport: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number
  }),
  markerCords: PropTypes.shape({
    lat: PropTypes.number,
    long: PropTypes.number
  }),
  children: PropTypes.func.isRequired
};

MapWrapper.defaultProps = {
  viewport: defaultViewPort,
  markerCords: {
    lat: 0,
    long: 0
  }
};
