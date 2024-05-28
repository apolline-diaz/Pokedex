import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";

function PokemonCard() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  function searchPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon({
          name: pokemonName,
          species: data.species.name,
          img: data.sprites.front_default,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          type: data.types[0].type.name,
        });
        setPokemonChosen(true);
      })
      .catch((error) => {
        console.error("Error fetching the Pokémon data:", error);
        setPokemonChosen(false);
      });
  }

  // function upperCase(str) {
  //   return str[0].toUpperCase() + str.slice(1);
  // }

  return (
    <>
      <section class='card'>
        <div class='searchbar'>
          <input
            type='text'
            placeholder='Enter a name'
            onChange={(event) => {
              setPokemonName(event.target.value);
            }}
          ></input>
          <button onClick={searchPokemon}>Search</button>
        </div>
        <div class='card-container'>
          {!pokemonChosen ? (
            <p>Please choose a Pokemon</p>
          ) : (
            <h1>{pokemonName}</h1>

            // <h1>{upperCase(pokemonName)}</h1>
          )}

          <img src={pokemon.img} />
          <div class='card-details'>
            <p>
              Species<span>{pokemon.species}</span>
              {/* Species<span>{upperCase(pokemon.species)}</span> */}
            </p>
            <p>
              HP<span>{pokemon.hp}</span>
            </p>
            <p>
              Attack<span>{pokemon.attack}</span>
            </p>
            <p>
              Defense<span>{pokemon.defense}</span>
            </p>
            <p>
              Type<span>{pokemon.type}</span>
              {/* Type<span>{upperCase(pokemon.type)}</span> */}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PokemonCard;
