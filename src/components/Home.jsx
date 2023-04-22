import { useState } from "react";
import { Search } from "./Search";
import { MovieCard } from "./Moviecard";

const apiKey = "afdc4dff";
const apiURL = `https://www.omdbapi.com?apikey=${apiKey}`;

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchEmpty, setSearchEmpty] = useState(false);
  const searchMovies = async (title) => {
    if (title !== "") {
      const response = await fetch(`${apiURL}&s=${title}`);
      const data = await response.json();
      if (!data.Search) {
        setSearchEmpty(true);
      }
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    }
  };
  return (
    <div className="wrapper">
      <h1>React Project | Movie Search</h1>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchMovies={searchMovies}
      />
      {movies.length > 0 ? (
        <div className="box">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        searchEmpty && <div className="empty">No movies found!</div>
      )}
    </div>
  );
};
