import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 30px",
      }}
    >
      <div className="nav-logo">
        <h1>React</h1>
      </div>
      <div className="nav-list">
        <ul style={{ display: "flex", listStyle: "none" }}>
          <Link className="navLink" to={"/"}>
            Home
          </Link>
          <Link className="navLink" to={"/about"}>
            About
          </Link>
          <Link className="navLink" to={"/contact"}>
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};
