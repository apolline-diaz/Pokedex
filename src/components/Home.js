import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CardList from "./CardList";
import { type } from "@testing-library/user-event/dist/type";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState("https://pokeapi.co/api/v2/pokemon/");

  // function getPokemons() {
  //   fetch("https://pokeapi.co/api/v2/pokemon/")
  //     .then((response) => response.json())
  //     .then((data) => setPokemons(data.results));
  // }

  // fetch data avec asynchrone
  const getPokemons = async () => {
    const res = await fetch(loading);
    const data = await res.json();

    setLoading(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setPokemons((currentList) => [...currentList, data]);
        // développer le ...currentList
      });
    }
    createPokemonObject(data.results);
    // await console.log(pokemons);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <section class='home'>
        <div class='searchbar'>
          <input type='text' placeholder='Enter a name' onChange={""}></input>
          <button onClick={"searchPokemon"}>Search</button>
          {/* composant searchbar à ajouter ici*/}
        </div>
        <div class='home-container'>
          {pokemons.map((pokemon, index) => (
            <CardList
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
