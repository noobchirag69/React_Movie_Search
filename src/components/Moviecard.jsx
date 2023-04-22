import React from "react";

export const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <div className="imgContainer">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <h3>{movie.Title} ({movie.Year})</h3>
      <p>Type: {movie.Type}</p>
    </div>
  );
};
