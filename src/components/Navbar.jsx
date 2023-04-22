import { Link } from "react-router-dom";

export const Navbar = () => {
  const style = {
    marginLeft: "20px",
    textDecoration: "none",
    color: "#000",
    fontSize: "18px",
  };
  return (
    <nav>
      <div className="nav-logo">
        <h1>Movie Search</h1>
      </div>
      <div className="nav-list">
        <ul>
          <Link to={"/"} style={style}>
            Home
          </Link>
          <Link to={"/about"} style={style}>
            About
          </Link>
          <Link to={"/contact"} style={style}>
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};
