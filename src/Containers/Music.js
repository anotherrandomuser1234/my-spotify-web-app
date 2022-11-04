import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Buffer} from 'buffer';
import SongList from './../Components/SongList';
global.Buffer = global.Buffer || require('buffer').Buffer

export default function Music() {

  const authToken = localStorage.getItem("authToken")

  const [songs, setSongs] = useState([]);

  const [error, setError] = useState(false);

  useEffect(() => {
    const getSongs = async () => {
      try {
          // get the id from the url
          const id = window.location.pathname.split("/")[2];
          const songs = await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=CH`, {headers: {'Authorization': `Bearer ${authToken}`}});
          console.log("🚀 ~ file: Music.js ~ line 22 ~ getSongs ~ songs", songs)
          setSongs(songs.data.tracks);
          console.log(songs);
      } catch (error) {
          console.log(error);
      }
  }
    getSongs();
    }, [])

  return (
    <div className="App">
    <h2>Most popular songs</h2>
      <header className="App-header">
      {/* textfield to set items */}
        {songs ? <SongList songs={songs} /> : undefined}
      </header>
    </div>
  );
}