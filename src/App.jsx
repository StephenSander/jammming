import { useState } from 'react'
import './App.css'
import Search from './Search.jsx';
import Results from './Results.jsx';

function App() {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  function addTrack(track) {
    setPlaylist(prev => [...prev, track]);
  }

  return (
    <>
      <h1>Jammming</h1>
      <Search onSearch={setResults} />
      <Results tracks={results} onAdd={addTrack} />
    </>
  )
}

export default App
