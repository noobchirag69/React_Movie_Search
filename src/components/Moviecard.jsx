import React from "react";

export const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <div className="imgContainer">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <h3>{movie.Title}</h3>
      <p>Type: {movie.Type}</p>
      <p>Year: {movie.Year}</p>
    </div>
  );
};
