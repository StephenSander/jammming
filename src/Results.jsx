import React, {useState} from 'react';

function Results() {
    const [results, setResults] = useState(['example1', 'example2', 'example3']);

    return (
        <>
            {results.map((track, index) => (
                <div key={index}>
                    <h3>{track}</h3>
                    <button>x</button>
                </div>
            ))}
        </>
    )
};

export default Results;