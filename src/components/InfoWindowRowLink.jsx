import React from 'react';
import { getChurchData } from '../functions';

export default function InfoWindowRowLink({ selectedPlace, churches }) {
  return (
    selectedPlace.name &&
    getChurchData(churches, selectedPlace)?.url && (
      <div>
        Site:
        <a
          className="church-site-link"
          href={
            selectedPlace.name && getChurchData(churches, selectedPlace)?.url
          }
        >
          {selectedPlace.name && getChurchData(churches, selectedPlace)?.url}
        </a>
      </div>
    )
  );
}
