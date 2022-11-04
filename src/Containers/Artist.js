import React, {useState} from 'react';
import axios from 'axios';
import {Buffer} from 'buffer';
import ArtistCard from '../Components/ArtistCard';
global.Buffer = global.Buffer || require('buffer').Buffer

export default function Artist() {

  const client_id = '547f91d3449f4f3384d1fe0f742f559f';
  const client_secret = '849e33debe2c4934948469f0d95c840c';
  const auth_token = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const [searchQuery, setSearchQuery] = useState('test');
  const [artists , setArtists] = useState([]);
  const [error, setError] = useState(false);

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': `Basic ${auth_token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  const inputHandler = (event) => {
    const enteredName = event.target.value;
    setSearchQuery(enteredName);
  };

  //TODO: REMOVE
  const throwError = () => {
    throw new Error('Something went wrong!');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getArtists();
    }
  }

  const getArtists = async () => {
    setError(true);
    if (!searchQuery) return;

    setError(false);

    const authToken = localStorage.getItem("authToken")
    try {
      const artists = await axios.get(`https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`, {headers: {'Authorization': `Bearer ${authToken}`}});
      console.log(artists);
      setArtists(artists.data.artists.items);
    } catch (error) {
      setError(true)
      console.log(error);
    }
  };

  React.useEffect(() => {

    const fetchToken = async () => {
      const response = await axios.post(authOptions.url, 'grant_type=client_credentials', {
        headers: authOptions.headers
      });
      localStorage.setItem("authToken", response.data.access_token);
      getArtists();
    }

      fetchToken().catch((error) => {
        setError(true);
        console.log("🚀 ~ file: App.tsx ~ line 32 ~ fetchToken ~ error", error)
      });

  }, []);


  return (
    
    <div className="App">
      <h2> Search for artists by name and click on an artist for more info </h2>
      <body className="App-body">
        <div className="searchContainer spacer-bottom">
          <input onChange={inputHandler} type="text" onKeyDown={handleKeyDown}/>
          <button className="searchButton spacer-left" onClick={getArtists}>Search</button>
        </div>
      {artists ? <ArtistCard artists={artists} /> : undefined}
      <button onClick={throwError} />
      </body>
    </div>
  );
}
