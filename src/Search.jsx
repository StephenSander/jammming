import React, { useState } from 'react';

function Search() {
    const [input, setInput] = useState('');

    function handleChange({target}) {
        setInput(target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        alert('Submitting');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name={input} value={input} onChange={handleChange} placeholder='Search for a song here...' />
            <br />
            <button type="submit">Search</button>
        </form>
    );
}

export default Search;