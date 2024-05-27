import React from "react";
import Home from "./components/Home";
import Card from "./components/Card";
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/' element={<Card />} />
        {/* <Route path='/pokemon/:id' element={<Card />} /> */}
      </Routes>
    </div>
  );
}

export default App;
