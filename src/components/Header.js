import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section class='header'>
        <h1>Pokédex</h1>
        <button class='home-btn'>
          <Link to='/'>Home</Link>
        </button>
      </section>
    </>
  );
}

export default Header;
