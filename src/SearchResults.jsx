import React from "react";
import Tracklist from "./Tracklist";

function SearchResults(props) {
    return (
        <Tracklist
          tracks={props.tracks}
          onAdd={props.onAdd}
          isRemoval={false}
        />
    );
};

export default SearchResults;