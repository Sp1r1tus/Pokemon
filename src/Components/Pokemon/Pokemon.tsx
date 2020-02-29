import React from 'react';
import { IPokemon } from '../../../models/models';
import { Link } from 'react-router-dom';

import './Pokemon.css';

interface IPokemonProps {
    pokemon: IPokemon;
}

const Pokemon: React.FC <IPokemonProps> = ({ pokemon }) => {

    return (
        <>
            <div className='pokemon-item'>
                <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
            </div>
        </>
    );
}
export default Pokemon;