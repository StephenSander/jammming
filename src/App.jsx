import { useState } from 'react'
import './App.css'
import Search from './Search.jsx';
import SearchResults from './SearchResults.jsx';
import Tracklist from './Tracklist.jsx';
import Track from './Track.jsx';
import Playlist from './Playlist.jsx';

function App() {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  function addTrack(track) {
    setPlaylist(prev => [...prev, track]);

    for (let x; x < playlist.length; x++) {
      for (let y; y < playlist.length; y++) {
        if (x == y) {
          playlist.splice(y, 1);
        }
      }
    }
  }

  return (
    <>
      <h1>Jammming</h1>
      <Search onSearch={setResults} />
      <SearchResults tracks={results} onAdd={addTrack} />
      <Playlist playlist={playlist} />
    </>
  )
}

export default App

/*
App
  SearchResults
    Tracklist
      Track
  Playlist
    Tracklist
      Track
*/