import React, { useState } from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";

function Pokedex() {
  const [results, setResults] = useState([]);

  return (
    <div className='pokedex-wrap'>
      <section className='pokedex'>
        <SearchBar setResults={setResults} />
        <div className='pokemonlist-container'>
          <PokemonList results={results} />
        </div>
      </section>
    </div>
  );
}

export default Pokedex;
