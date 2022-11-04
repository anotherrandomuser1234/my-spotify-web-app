import * as React from "react";
import Artists from "../Interfaces/Artist";
import Artist from "../Interfaces/Artist";

import { useNavigate } from "react-router-dom";
import './ArtistCard.css'

export default function ArtistCard(props) {
  const navigate = useNavigate();
  const items = props?.artists;
  const noArtistsFound = "No Artists Found";

  const goToArtistSongs = (artistId) => {
    navigate(`/artist/${artistId}`);
  }

  return (
    <div className="cardContainer">
    {items.map((artist) => (
      <div className="card" id={artist.id} onClick={() => goToArtistSongs(artist.id)}>
        <img className="image" src={artist?.images[0]?.url} alt=""/>
        <h3>{artist?.name}</h3>
        <p>followers: {artist?.followers?.total}</p>
        {(artist.genres && artist.genres.length > 0) ? <p>genre: {artist.genres[0]}</p> : undefined}
     </div>
      ))}
      {items.length === 0 ?  <p>{noArtistsFound}</p> : undefined}
      </div>
    );

  }