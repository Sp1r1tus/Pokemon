import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_POKEMONS } from '../../graphql/get-pokemons';
import { IPokemon } from '../../../models/models';
import PokemonGraphQL from '../PokemonGraphQL/PokemonGraphQL';

export function PokemonListGraphQL() {
    const {data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 9},
    })


return (
    <>
    <h1>List of all Pokemons</h1>

    {pokemons.map((item: IPokemon, index: number) => {
        console.log(item)
      return <PokemonGraphQL key={item.id} pokemon={item}/>;
    })}
  </>
)

}