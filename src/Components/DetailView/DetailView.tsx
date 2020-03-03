import React, {useEffect, useState, Suspense, lazy} from 'react';
import { match } from 'react-router-dom'
import Axios from 'axios';
import { IPokemon, IPokemonAbilities, IPokemonPicture, IPokemonTypes, IPokemonStats, IPokemonMoves } from '../../../models/models';
import Config from '../../config.json';
import {CircularProgress } from '@material-ui/core';
import Ability from '../Ability/Ability';
import Type from '../Type/Type';
import Stats from '../Stats/Stats';

import './DetailView.css';

const Image = lazy(() => import('../Image/Image'))

interface IDetailViewProps {
    match: match<IPokemon>;
}

const DetailView: React.FC <IDetailViewProps> = ({ match }) => {
    const [pokemonPicture, setPokemonPicture] = useState<IPokemonPicture>({});
    const [pokemonAbilities, setPokemonAbilities] = useState<IPokemonAbilities[]>([]);
    const [pokemonTypes, setPokemonTypes] = useState<IPokemonTypes[]>([]);
    const [pokemonOrder, setPokemonOrder] = useState<string>('');
    const [pokemonStats, setPokemonStats] = useState<IPokemonStats[]>([]);
    const [pokemonMoves, setPokemonMoves] = useState<IPokemonMoves[]>([]);
  
    const [pokemonFirst, setPokemonFirst] = useState<string>('');
    const [pokemonSecond, setPokemonSecond] = useState<string>('');
    const [pokemonThird, setPokemonThird] = useState<string>('');
    
    useEffect(() => {
      const loadDetails = async () => {
        const ResponseDetails = await Axios.get(Config.API_URL + match.params.name);
        const ResponseSpecies = await Axios.get(Config.API_URL_2 + match.params.name);
        const EvolutionUrl: string = ResponseSpecies.data.evolution_chain.url
        const ResponseEvolution: any = await Axios.get(EvolutionUrl);
          
        setPokemonPicture(ResponseDetails.data.sprites)
        setPokemonAbilities(ResponseDetails.data.abilities);
        setPokemonTypes(ResponseDetails.data.types);
        setPokemonOrder(ResponseDetails.data.order);
        setPokemonStats(ResponseDetails.data.stats);
        setPokemonMoves(ResponseDetails.data.moves);
        setPokemonFirst(ResponseEvolution.data.chain.species.name)
        setPokemonSecond(ResponseEvolution.data.chain.evolves_to[0]?.species.name || '')
        setPokemonThird(ResponseEvolution.data.chain.evolves_to[0]?.evolves_to[0]?.species.name || '')
      };
      loadDetails();   
    }, [match.params.name]);
    return (
        <div className='detail-card'> 
          <h1>{match.params.name.toLocaleUpperCase()}</h1>
          <Suspense fallback={<div><CircularProgress /></div>}>
              <Image pictures={pokemonPicture} />
          </Suspense>
          <section className='detail-property'>            
            <h2>Moves</h2>
            <ul className='detail-moves'>
              {pokemonMoves.map((item: IPokemonMoves, index: number) => (
                <li key={index} value={item.move.name}>
                  {item.move.name}
                </li>
              ))}
            </ul>
          </section>
          <section className='detail-property'>            
            <h2>Stats</h2>
            {pokemonStats.map((item: IPokemonStats, index: number) => {
            return <Stats
              key={index}
              stats={item}
            />;
            })}
          </section>
          <section className='detail-property'>
            <h2>Abilities</h2>
            {pokemonAbilities.map((item: IPokemonAbilities, index: number) => {
            return <Ability
              key={index}
              ability={item}
            />;
            })}
          </section>
          <section className='detail-property'>            
            <h2>Types</h2>
            {pokemonTypes.map((item: IPokemonTypes, index: number) => {
            return <Type
              key={index}
              type={item}
            />;
            })}
          </section>
          <section className='detail-property'>            
            <h2>Evolution</h2>
            <div className='detail-evolution'>
             {pokemonFirst ? <div className='detail-evolution-sub'>{pokemonFirst.toLocaleUpperCase()}</div> : <></>}
             {pokemonSecond ? <div className='detail-evolution-sub'>{pokemonSecond.toLocaleUpperCase()}</div> : <></>}
             {pokemonThird ?<div className='detail-evolution-sub'>{pokemonThird.toLocaleUpperCase()}</div> : <></>}
            </div>
          </section>
          <div className='detail-order'>order nbr: {pokemonOrder}</div>
        </div>
    );
}
export default DetailView;