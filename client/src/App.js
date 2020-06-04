import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom'
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'
import {useParams} from 'react-router-dom';

const params = {useParams};
const id = params.id;

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Route path="/movies/:id">
          <Movie movies = {movieList} addToSavedList = {addToSavedList} />
        </Route>
      
      <Route path="/">
        <MovieList movies = {movieList} />
      </Route>

      


    </div>
  );
};

export default App;
