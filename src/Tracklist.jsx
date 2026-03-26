import React, {useState} from 'react';
import Track from './Track';
import styles from './styles/Tracklist.module.css';

function Tracklist(props) {

  return (
    <div className={styles.tracklistContainer}>
      {props.tracks?.map(track => (
        <Track
          key={track.id}
          track={track}
          onAction={props.onAction}
          isRemoval={props.isRemoval}
        />
      ))}
    </div>
  );
};

export default Tracklist;