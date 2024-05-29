import React from "react";

function PokemonCard({ result }) {
  function upperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <>
      <div class='pokemoncard-container'>
        <h1>{result.name}</h1>
        <img src={result.img} />
        <div class='pokemoncard-details'>
          <p>
            Species<span>{result.species}</span>
          </p>
          {/* <p>
            HP<span>{result.hp}</span>
          </p> */}
          <p>
            Attack<span>{result.attack}</span>
          </p>
          <p>
            Defense<span>{result.defense}</span>
          </p>
          <p>
            Type<span>{result.type}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
