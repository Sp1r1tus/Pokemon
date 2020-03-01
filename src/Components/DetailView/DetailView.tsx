import React, {useEffect, useState, Suspense, lazy} from 'react';
import { match } from 'react-router-dom'
import Axios from 'axios';
import { IPokemon, IPokemonAbilities, IPokemonPicture } from '../../../models/models';
import Config from '../../config.json';
import CircularProgress from '@material-ui/core/CircularProgress';
import Ability from '../Ability/Ability';

import './DetailView.css';


const Image = lazy(() => import('../Image/Image'))

interface IDetailViewProps {
    match: match<IPokemon>;
}

const DetailView: React.FC <IDetailViewProps> = ({ match }) => {
    const [pokemonPicture, setPokemonPicture] = useState(undefined);
    const [pokemonAbilities, setPokemonAbilities] = useState([]);

    const emptyObject: IPokemonPicture = {
      back_default: '',
      back_female: '',
      back_shiny: '',
      back_shiny_female: '',
      front_default: '',
      front_female: '',
      front_shiny: '',
      front_shiny_female: ''
    }

    useEffect(() => {
      const loadDetails = async () => {
        const ResponseDetails = await Axios.get(`${Config.API_URL}${match.params.name}`);
        setPokemonPicture(ResponseDetails.data.sprites)
        setPokemonAbilities(ResponseDetails.data.abilities);
      };
      loadDetails();   
    }, [match.params.name]);

    return (
        <div className='detail-card'> 
        <h1>{match.params.name.toLocaleUpperCase()}</h1>
            <Suspense fallback={<div><CircularProgress /></div>}>
                <Image pictures={pokemonPicture || emptyObject} />
            </Suspense>
            <h2>Abilities</h2>
            {pokemonAbilities.map((item: IPokemonAbilities, index: number) => {
            return <Ability
              key={index}
              ability={item}
            />;
          })}
        </div>
    );
}
export default DetailView;