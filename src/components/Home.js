import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

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
        // await console.log(pokemons);
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
        </div>
        <div class='home-container'>
          {pokemons.map(({ img, name }) => (
            <div class='home-card'>
              <img src={img} alt={name} />
              <h2>{name}</h2>
              <button>Details</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
