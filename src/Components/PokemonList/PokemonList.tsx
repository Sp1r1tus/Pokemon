import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import { IPokemon, IAuth } from '../../../models/models';
import { useSelector, shallowEqual } from 'react-redux';
import { InitialState } from '../../store/root-reducer';
import AuthButton from '../AuthButton/AuthButton';
import { LOGOUT } from '../AuthButton/AuthButtonCaption';

interface IPokemonListProps {
    pokemons: IPokemon[];
}

const PokemonList: React.FC <IPokemonListProps> = ({ pokemons }) => {

  const { auth } = useSelector<InitialState, IAuth>((state: InitialState) => {
    return {
      auth: state.auth,
      pw: state.pw
    }
  },shallowEqual);
    if (auth) {
      if (pokemons) {
        return (
          <>
            <AuthButton buttonCaption={LOGOUT} />
            <h1>List of all Pokemons</h1>
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
    } else {
      return ( <div>Authentification is {auth.toString()}</div>)
    }

}
export default PokemonList;