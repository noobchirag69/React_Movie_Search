import { useState } from "react";

export const Search = ({ searchMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    searchMovies(searchTerm);
  };

  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Search for Movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
