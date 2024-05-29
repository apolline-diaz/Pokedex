import React, { useState } from "react";
import { Link } from "react-router-dom";

function PokemonList({ results }) {
  function upperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  return (
    <>
      {results.map((result, index) => (
        <div className='pokemonlist-card' key={index}>
          <Link to={`/pokemon/${result.name}`}>
            <img src={result.img} alt={result.name} />
          </Link>
          <p>{upperCase(result.name)}</p>
        </div>
      ))}
    </>
  );
}

export default PokemonList;
