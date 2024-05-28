import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";

function Pokemon() {
  const [results, setResults] = useState([]);

  const { name } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        setSelectedPokemon({
          name: data.name,
          species: data.species.name,
          img: data.sprites.front_default,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          type: data.types[0].type.name,
        });
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  console.log(setResults);

  return (
    <div className='card'>
      <SearchBar setResults={setResults} />
      <PokemonCard result={selectedPokemon} />
    </div>
  );
}

export default Pokemon;
