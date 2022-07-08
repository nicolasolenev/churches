import React from 'react';

export default function InfoWindowRow({ type, text }) {
  return <div>{`${type}: ${text}`}</div>;
}
