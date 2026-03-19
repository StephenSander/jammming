import React from 'react';

function Track(props) {
  console.log(props.track);

  return (
    <div>
      <p>{props.track.name}</p>

      <button onClick={() => props.onAction(props.track)}>
        {props.isRemoval ? "-" : "+"}
      </button>
    </div>
  );
}

export default Track;