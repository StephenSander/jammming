import React from "react";
import Tracklist from "./Tracklist";

function SearchResults(props) {
    return (
        <Tracklist tracks={props.tracks} onAdd={props.onAdd} />
    );
};

export default SearchResults;