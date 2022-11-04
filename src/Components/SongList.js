import * as React from "react";
import Artists from "../Interfaces/Artist";
import Artist from "../Interfaces/Artist";
import './SongList.css'

export default function SongList(props) {
  
  const items = props?.songs;

  console.log("🚀 ~ file: ArtistCard.js ~ line 12 ~ ArtistCard ~ render ~ items", items)

  return (
    <div>
    <table className="songContainer">
    <thead>
    <tr>
        <th></th>
        <th>Title</th>
        <th>Album</th>
        <th>Artists</th>
    </tr>
    </thead>
    <tbody>
    {items.map((song) => (
      <tr className="song" id={song.id}>
        <td><img className="tableImage" src={song.album.images[0].url} alt=""/></td>
        <td>{song.name}</td>
        <td>{song.album.name}</td>
        <td>{song.artists.map(artist => artist.name).toString()}</td>
     </tr>
      ))}
      </tbody> 
      </table>
      </div>
    );
  }