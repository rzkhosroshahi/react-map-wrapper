import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayoutRoute } from './components/appLayoutRoute/index';
import { MapBox } from './components/mapBox';
import { CedarMap } from './components/cedarMap';
import './App.css';

function App() {
  return (
    <Router>
      <AppLayoutRoute exact path="/" component={MapBox} />
      <AppLayoutRoute exact path="/cedar" component={CedarMap} />
    </Router>
  );
}

export default App;
