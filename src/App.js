import React from "react";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Pokedex />
      <Routes>
        <Route path='/' element={<Pokedex />} />
        <Route path='/pokemon/:name' element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
