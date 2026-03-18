import React, { useState } from 'react';

function Search(props) {
    const [input, setInput] = useState('');

    function handleChange({target}) {
        setInput(target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();

        // This will eventually be where the Spotify API get request will go
        const fakeResults = ['Song A', 'Song B'];
        props.onSearch(fakeResults);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='search'
                value={input}
                onChange={handleChange}
                placeholder='Search for a song here...'
            />
            <br />
            <button type="submit">
                Search
            </button>
        </form>
    );
}

export default Search;