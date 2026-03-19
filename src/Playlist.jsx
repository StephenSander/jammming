import React from "react";
import Track from "./Track";

export default function Playlist(props) {
    return (
        <>
            {props.playlist.map((song, i)=> (
                <p>Nothing yet</p>
            ))}
        </>
    );
};