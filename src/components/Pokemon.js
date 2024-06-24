import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";

function Pokemon() {
  const [results, setResults] = useState([]);

  const { name } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState({
    name: "",
    id: "",
    description: "",
    type: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
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
          id: data.id,
          species: data.species.name,
          type: data.types[0].type.name,
          img: data.sprites.front_default,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,
          description: data.flavor_text,
        });
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  return (
    <section className='pokemon'>
      {/* <SearchBar setResults={setResults} /> */}
      <div className='pokemon-container'>
        <PokemonCard result={selectedPokemon} />
      </div>
    </section>
  );
}

export default Pokemon;
