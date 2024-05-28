import React, { useState } from "react";

const Searchbar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const searchPokemon = (value) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
      .then((response) => response.json())
      .then(async (data) => {
        const results = data.results.filter((pokemon) => {
          return (
            value &&
            pokemon &&
            pokemon.name &&
            pokemon.name.toLowerCase().includes(value.toLowerCase())
          );
        });

        const detailedResults = await Promise.all(
          results.map(async (result) => {
            const res = await fetch(result.url);
            const data = await res.json();
            return {
              name: data.name,
              img: data.sprites.front_default,
              type: data.types[0].type.name,
              species: data.species.name,
              img: data.sprites.front_default,
              hp: data.stats[0].base_stat,
              attack: data.stats[1].base_stat,
              defense: data.stats[2].base_stat,
            };
          })
        );

        setResults(detailedResults);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    searchPokemon(value);
  };

  return (
    <div className='searchbar'>
      <input
        type='text'
        placeholder='Enter a name'
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
};

export default Searchbar;
