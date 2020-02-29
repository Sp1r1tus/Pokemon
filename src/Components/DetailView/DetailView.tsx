import React, {useEffect, useState, Suspense, lazy} from 'react';
import { match } from 'react-router-dom'
import Axios from 'axios';
import { IPokemon } from '../../../models/models';
import Config from '../../config.json';

const Image = lazy(() => import('../Image/Image'))

interface IDetailViewProps {
    match: match<IPokemon>;
}

const DetailView: React.FC <IDetailViewProps> = ({ match }) => {
    const [pokemonPicture, setPokemonPicture] = useState(undefined);

    useEffect(() => {
      const loadDetails = async () => {
        const ResponseDetails = await Axios.get(`${Config.API_URL}${match.params.name}`);
        setPokemonPicture(ResponseDetails.data.sprites)
      };
      loadDetails();   
    }, [match.params.name]);

    return (
        <div> 
        <h1>{match.params.name}</h1>
            <Suspense fallback={<div>loading...</div>}>
                <Image pictures={pokemonPicture} />
            </Suspense>
        </div>
    );
}
export default DetailView;