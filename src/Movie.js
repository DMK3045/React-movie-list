import React from 'react';

const Movie = ({ movie }) => {
  return (
    <li className="movie" key={movie.id}>
      <img src={movie.poster} alt={movie.title} />
      <p>
        {movie.title} by {movie.director} was released on {movie.year}
      </p>
      <p> {movie.rating} </p>
    </li>
  );
};

export default Movie;
