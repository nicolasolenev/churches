import React from 'react';

export default function InfoWindowRowLink({ text }) {
  return (
    text && (
      <div>
        site:
        <a className="church-site-link" href={text}>
          {text}
        </a>
      </div>
    )
  );
}
