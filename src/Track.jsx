import React from 'react';
import styles from './styles/Track.module.css';

function Track(props) {
  console.log(props.track);

  return (
    <div className={styles.cardContainer}>
        <p>{props.track.name}</p>

        <button onClick={() => props.onAction(props.track)}>
            {props.isRemoval ? "-" : "+"}
        </button>
    </div>
  );
}

export default Track;