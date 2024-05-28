import React, { useState } from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";

function Home() {
  const [results, setResults] = useState([]);

  return (
    <section className='home'>
      <SearchBar setResults={setResults} />
      <div className='home-container'>
        <PokemonList results={results} />
      </div>
    </section>
  );
}

export default Home;
