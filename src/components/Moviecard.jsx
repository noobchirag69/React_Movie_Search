import React from "react";

export const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard" style={{ textAlign: "center", height: "100%" }}>
      <div
        className="imgContainer"
        style={{ height: "450px", marginBottom: "20px" }}
      >
        <img
          style={{ height: "100%", width: "100%", borderRadius: "15px" }}
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
          title={movie.Title}
        />
      </div>
      <h3 style={{ letterSpacing: "1px", marginBottom: "10px" }}>
        {movie.Title} ({movie.Year})
      </h3>
      <p style={{ textTransform: "capitalize" }}>Type: {movie.Type}</p>
    </div>
  );
};
