import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import {Buffer} from 'buffer';
import ArtistCard from './Components/ArtistCard';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Artist from './Containers/Artist';
import Music from './Containers/Music';
import ErrorComponent from './Components/ErrorComponent';
import { ErrorBoundary } from 'react-error-boundary';
global.Buffer = global.Buffer || require('buffer').Buffer

function App() {

  return (
    <ErrorBoundary
    FallbackComponent={ErrorComponent}
    >
           <div className="App">
            <Link className="link" to="/">Home</Link>
            <h1>Spotify Helper</h1>
           <Routes>
                 <Route path='/' element={< Artist />}></Route>
                 <Route path='/artist/:id' element={< Music />}></Route>
          </Routes>
          </div>
          </ErrorBoundary>
  );
}

export default App;
