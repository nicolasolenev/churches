import React from 'react';
import { getChurchData } from '../functions';

export default function InfoWindowRow({ type, selectedPlace, churches }) {
  return (
    <div>
      {`${type}: ${
        selectedPlace.name && getChurchData(churches, selectedPlace)?.[type]
      }`}
    </div>
  );
}
