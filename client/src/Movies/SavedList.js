import React from 'react';
import {Route} from 'react-router-dom';
import {useHistory } from "react-router-dom";


function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div onClick={handleClick}>
      Home
    </div>
  );
}

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    
    
    <div className="home-button">
      <HomeButton>Home</HomeButton>
    </div>
  </div>
);

export default SavedList;
