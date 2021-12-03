import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PokeCard(props) {
  const [pokemon, setPokemon] = useState({})
  const [pokeName, setPokName] = useState("")

  const pegaPokeName = () => {
    setPokName(props)
  }

  const pegaPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName.props}`)
      .then(res => {
        setPokemon(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    pegaPokemon()
  }, [pokeName])

  useEffect(() => {
    pegaPokeName()
  }, [props])


  return (

    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}



