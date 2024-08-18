import React from 'react';

function Movie({ movie }) {
  if (!movie) return <p>Select a movie to see details.</p>;

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <img src={movie.img} alt={movie.title} />
      <p>{movie.episode}</p>
      <p>{movie.description}</p>
    </div>
  );
}

export default Movie;
