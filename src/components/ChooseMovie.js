// src/components/ChooseMovie.js
import React from 'react';

function ChooseMovie({ onSelectMovie }) {
  const movies = [
    { title: 'A ARCA DE NOÉ', image: '/noe.jpg' },
    { title: 'TODO TEMPO QUE TEMOS', image: '/tempo.jpg' },
    { title: 'TUDO POR UM POP STAR 2', image: '/pop.jpg' }
  ];
  const correctMovie = 'TODO TEMPO QUE TEMOS';

  const handleMovieSelection = (movieTitle) => {
    if (movieTitle === correctMovie) {
      onSelectMovie(movieTitle);
    } else {
      alert("Infelizmente esse esgotou, tente outro filme.");
    }
  };

  return (
    <div className="screen choose-movie">
      <h2>Escolha um filme</h2>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div
            key={index}
            className={`movie-option ${movie.title === correctMovie ? 'highlight' : ''}`}
          >
            <img
              src={movie.image}
              alt={movie.title}
              onClick={() => handleMovieSelection(movie.title)}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseMovie;