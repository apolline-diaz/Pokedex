import React, { useState } from "react";
import { Link } from "react-router-dom";

function PokemonList({ results }) {
  function upperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  return (
    <>
      {results.map((result, index) => (
        <div className='home-card'>
          <div key={index}>
            <h2>{upperCase(result.name)}</h2>
            <img src={result.img} alt={result.name} />

            <Link to={`/pokemon/${result.name}`}>
              <button class='btn'>Details</button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default PokemonList;
