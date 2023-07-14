import React, { useContext } from "react";
import { PokeContext } from "../../context/PokeContextProvider";

const PokeController = () => {
  const { pokemon, fetchPokemon } = useContext(PokeContext);
  return (
    <>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      {pokemon && (
        <span>
          {pokemon.id}. {pokemon.name}
        </span>
      )}
    </>
  );
};

export default PokeController;
