import React, { useState, useEffect } from 'react';
import movieData from './movie.json'; 
import NewRealase from './NewRealase';

const Explore = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setMovies(movieData.data); 
    setSelectedMovie(movieData.data[0]);
  }, []);


  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <section className="explore">
      <h2>Explore</h2>


      {selectedMovie && (
        <div className="featured-anime">
          <img
            className="featured-image"
            src={`${selectedMovie.image}`} 
            alt={selectedMovie.movieName}
          />
          <div className="featured-anime-details">
            <h3>{selectedMovie.movieName}</h3>
            <p>{selectedMovie.description}</p>
            <p>Tập: {selectedMovie.episode}</p>
          </div>
        </div>
      )}

      <div className="movie-list">
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <button onClick={() => handleMovieClick(movie)}>
                {movie.movieName} - Tập: {movie.episode}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Explore;
