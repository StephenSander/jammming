import React from "react";
import Tracklist from "./Tracklist";

function SearchResults(props) {
    return (
        <>
            {props.tracks.map((track, i) => (
                <Tracklist
                    key={i}
                    track={track}
                    onAdd={props.onAdd}
                />
            ))}
        </>
    );
};

export default SearchResults;