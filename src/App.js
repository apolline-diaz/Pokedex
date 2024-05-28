import React from "react";
import Home from "./components/Home";
import PokemonCard from "./components/PokemonCard";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/' element={<PokemonCard />} />
        <Route path='/searchbar/' element={<SearchBar />} />

        {/* <Route path='/pokemon/:id' element={<Card />} /> */}
      </Routes>
    </div>
  );
}

export default App;
