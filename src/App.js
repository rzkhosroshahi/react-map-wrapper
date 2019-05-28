import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayoutRoute } from './components/appLayoutRoute/index';
import { MapBox } from './components/mapBox';
import { CedarMap } from './components/cedarMap';
import { CedarDefaultMarker } from './examples/CedarDefaultMarker';
import './App.css';

function App() {
  return (
    <Router>
      <AppLayoutRoute exact path="/" component={MapBox} />
      <AppLayoutRoute path="/cedar" component={CedarMap} />
      <AppLayoutRoute path="/cedar_default" component={CedarDefaultMarker} />
    </Router>
  );
}

export default App;
