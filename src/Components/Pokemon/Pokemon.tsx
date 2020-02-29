import React from 'react';
import { IPokemon } from '../../../models/models';
import './Pokemon.css';

interface IPokemonProps {
    pokemon: IPokemon;
}

const Pokemon: React.FC <IPokemonProps> = ({ pokemon }) => {

    return (
        <>
            <div className='pokemon-item'>
                {pokemon.name}
            </div>
        </>
    );
}
export default Pokemon;