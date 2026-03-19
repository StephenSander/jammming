import React from "react";
import Tracklist from "./Tracklist";

export default function Playlist(props) {
    return (
        <>
          <Tracklist
            tracks={props.plalist}
            onAction={props.onRemove}
            isRemoval={true}
          />
        </>
    );
};