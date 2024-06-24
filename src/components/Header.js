import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section class='header'>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <h1>Pokédex</h1>
        </Link>
      </section>
    </>
  );
}

export default Header;
