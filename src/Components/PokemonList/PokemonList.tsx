import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import { IPokemon } from '../../../models/models';

interface IPokemonListProps {
    pokemons: IPokemon[];
}

const PokemonList: React.FC <IPokemonListProps> = ({ pokemons }) => {
    if (pokemons) {
      return (
        <>
          {pokemons.map((item: IPokemon, index: number) => {
            return <Pokemon
              key={index}
              pokemon={item}
            />;
          })}
        </>
      );
    } else {
      return (<h1>loading...</h1>)
    }
}
export default PokemonList;