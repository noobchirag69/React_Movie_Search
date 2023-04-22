import { useState } from "react";

export const Search = ({ searchMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    searchMovies(searchTerm);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <div
      className="searchContainer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <input
        type="text"
        placeholder="Search for Movies..."
        style={{
          padding: "10px 20px",
          border: "none",
          outline: "none",
          borderRadius: "5px",
          fontSize: "16px",
          width: "100%",
          boxShadow: "0 3px 7px rgba(179, 179, 179, 0.5)",
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown} // add event listener
      />
      <i
        class="fa-solid fa-magnifying-glass"
        style={{ position: "absolute", right: "20px", color: "#777" }}
      ></i>
    </div>
  );
};
