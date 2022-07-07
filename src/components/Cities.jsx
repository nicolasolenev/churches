import React from 'react';

import { CITIES } from '../vars';
import { getChurches } from '../api';
import { getFilteredChurches } from '../functions';

export default function Cities({ selectedCity, setCity, setChurches }) {
  function handleChange(e) {
    const cityName = e.target.value;

    setCity(cityName);

    getChurches(CITIES[cityName]).then((churches) => {
      setChurches(getFilteredChurches(churches));
    });
  }

  return (
    <div className="cities">
      Choose a city to see parish churches:
      <select
        className="cities__select"
        value={selectedCity}
        onChange={handleChange}
      >
        {Object.keys(CITIES).map((city) => {
          return (
            <option key={city} value={city}>
              {city}
            </option>
          );
        })}
      </select>
    </div>
  );
}
