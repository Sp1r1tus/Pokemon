import React from 'react';
import { match } from 'react-router-dom'
import { IPokemon } from '../../../models/models';

interface IDetailViewProps {
    match: match<IPokemon>;
}

const DetailView: React.FC <IDetailViewProps> = ({ match }) => {
    return (
        <div> 
          <h1>{match.params.name}</h1>
        </div>
    );
}
export default DetailView;