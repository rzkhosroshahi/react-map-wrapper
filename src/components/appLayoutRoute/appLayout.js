import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from './nav';

export const AppLayout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
};
