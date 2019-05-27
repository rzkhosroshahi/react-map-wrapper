import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { defaultViewPort, updateObject } from '../../utils';

export class MapWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewport: props.viewport
    };

    this.setViewPortState = this.setViewPortState.bind(this);
    this.setViewPortStateField = this.setViewPortStateField.bind(this);
  }

  setViewPortState(view) {
    this.setState({
      viewport: view
    });
  }

  setViewPortStateField(field, value) {
    const { viewport } = this.state;
    this.setState({
      viewport: updateObject(viewport, field, value)
    });
  }

  render() {
    const { viewport } = this.state;
    const { children } = this.props;
    return (
      <section className="map_wrapper">
        {children({
          viewport,
          changeViewPort: this.setViewPortState,
          changeViewPortFiled: this.setViewPortStateField
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
  children: PropTypes.func.isRequired
};

MapWrapper.defaultProps = {
  viewport: defaultViewPort
};
