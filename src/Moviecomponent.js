import React from 'react';
import { movies } from './data/movies';
import Movie from './Movie';

const fetchMovieData = () => {
  return movies;
};

const Moviecomponent = () => {
  const movieData = fetchMovieData();

  return (
    <div className="movie-container">
      <h2 style={{ textAlign: 'center' }}>Movies</h2>
      <ul className="movie-list">
        {movieData.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Moviecomponent;
