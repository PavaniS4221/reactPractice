import { useState } from "react";
import MovieCard from "./components/moviecard";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Favourite from "./pages/favourites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
