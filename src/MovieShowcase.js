import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movie, idx) => <MovieCard  
      key={idx} // passing a key property like this gets rid of the error saying "each children needs a unique key prop"
      title= {movie.title} 
      IMDBRating={movie.IMDBRating} 
      genres={movie.genres}  
      poster= {movie.poster}/>)
  }


  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
