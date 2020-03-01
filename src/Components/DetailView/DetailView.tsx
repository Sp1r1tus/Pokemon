import React, {useEffect, useState, Suspense, lazy} from 'react';
import { match } from 'react-router-dom'
import Axios from 'axios';
import { IPokemon, IPokemonAbilities } from '../../../models/models';
import Config from '../../config.json';
import CircularProgress from '@material-ui/core/CircularProgress';
import Ability from '../Ability/Ability';

const Image = lazy(() => import('../Image/Image'))

interface IDetailViewProps {
    match: match<IPokemon>;
}

const DetailView: React.FC <IDetailViewProps> = ({ match }) => {
    const [pokemonPicture, setPokemonPicture] = useState(undefined);
    const [pokemonAbilities, setPokemonAbilities] = useState([]);

    useEffect(() => {
      const loadDetails = async () => {
        const ResponseDetails = await Axios.get(`${Config.API_URL}${match.params.name}`);
        setPokemonPicture(ResponseDetails.data.sprites)
        setPokemonAbilities(ResponseDetails.data.abilities);
      };
      loadDetails();   
    }, [match.params.name]);

    return (
        <div> 
        <h1>{match.params.name}</h1>
            <Suspense fallback={<div><CircularProgress /></div>}>
                <Image pictures={pokemonPicture} />
            </Suspense>
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