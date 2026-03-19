import { useState } from 'react'
import './App.css'
import Search from './Search.jsx';
import SearchResults from './SearchResults.jsx';
import Playlist from './Playlist.jsx';

function App() {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  function addTrack(track) {
  setPlaylist(prev => {
    if (prev.some(t => t.id === track.id)) {
        return prev;
      }
      return [...prev, track];
    });
  }

  function removeTrack(track) {
    setPlaylist(prev => prev.filter(t => t.id !== track.id)
    );
  }

  return (
    <>
      <h1>Jammming</h1>
      <Search onSearch={setResults} />

      <SearchResults 
        tracks={results}
        onAdd={addTrack}
      />

      <Playlist
        playlist={playlist}
        onRemove={removeTrack}
      />
    </>
  )
}

export default App