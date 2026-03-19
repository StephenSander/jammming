import React, {useState} from 'react';
import Track from './Track';

function Tracklist(props) {

  return (
    <>
      {props.tracks?.map(track => (
        <Track
          key={track.id}
          track={track}
          onAction={props.onAction}
          isRemoval={props.isRemoval}
        />
      ))}
    </>
  );
};

export default Tracklist;