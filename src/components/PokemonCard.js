import React from "react";

function PokemonCard({ result }) {
  function upperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <>
      <div class='pokemoncard-container'>
        <p>{result.id}</p>
        <img src={result.img} />
        <h1>{result.name}</h1>
        <h4>
          {result.type}/{result.species}
        </h4>
        <div class='pokemoncard-details'>
          <p>
            HP<span>{result.hp}</span>
            <div class='bar'></div>
          </p>
          <p>
            Attack<span>{result.attack}</span>
          </p>
          <p>
            Defense<span>{result.defense}</span>
          </p>
          <p>
            Speed<span>{result.speed}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
