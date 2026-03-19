import React from "react";
import Tracklist from "./Tracklist";

export default function Playlist(props) {
    return (
        <>
          <Tracklist
            tracks={props.playlist}
            onAction={props.onRemove}
            isRemoval={true}
          />
          
          <button onClick={e => e.preventDefault()}>
            Save to Spotify
          </button>
        </>
    );
};