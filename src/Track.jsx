import React from 'react';

function Track(props) {
  return (
    <div>
      <p>{props.track}</p>
      <button onClick={() => props.onAdd(props.track)}>+</button>
    </div>
  );
}

export default Track;