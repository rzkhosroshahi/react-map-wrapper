import React from 'react';
import { Route } from 'react-router-dom';
import { AppLayout } from './appLayout';

export const AppLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => {
        return (
          <AppLayout>
            <Component {...matchProps} />
          </AppLayout>
        );
      }}
    />
  );
};
