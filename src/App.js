import React, { useState, useEffect } from 'react';

import GoogleApiWrapper from './components/GoogleMap';
import Cities from './components/Cities';
import { CITIES, INITIAL_CITY_COORDS, INITIAL_CITY_NAME } from './vars';
import { getChurches } from './api';
import { getFilteredChurches } from './functions';
import './App.scss';

function App() {
  const [selectedCity, setCity] = useState(INITIAL_CITY_NAME);
  const [churches, setChurches] = useState([]);

  useEffect(() => {
    getChurches(INITIAL_CITY_COORDS).then((churches) => {
      setChurches(getFilteredChurches(churches));
    });
  }, []);

  return (
    <div className="app">
      <Cities
        cities={CITIES}
        selectedCity={selectedCity}
        setCity={setCity}
        setChurches={setChurches}
      />
      <GoogleApiWrapper coords={CITIES[selectedCity]} churches={churches} />
    </div>
  );
}

export default App;
