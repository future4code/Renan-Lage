import React from "react";
import axios from "axios";
import PokeCard from "./components/pokeCard";
import { useState, useEffect } from "react";
import './App.css'


export default function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  const pegarPokeName = (event) => {
    setPokeName(event.target.value)
  }
  const pegarPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    pegarPokemons()
  }, [])
  

  return (
    <div className="App">
      <select onChange={pegarPokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard props={pokeName} />}
    </div>
  );
}


