import React, {useState} from 'react';
import Track from './Track';

function Tracklist(props) {

  return (
    <>
      {props.tracks.map((track, i) => (
          <Track
              key={i}
              track={track}
              onAdd={props.onAdd}
          />
      ))}
    </>
  );
};

export default Tracklist;