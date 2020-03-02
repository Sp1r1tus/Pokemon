import React from 'react';
import { IPokemonTypes } from '../../../models/models';

import './Type.css';

interface ITypesProps {
    type: IPokemonTypes;
}

const Type: React.FC <ITypesProps> = ({ type }) => {
    const howManyDots = () => {
        let result: React.ReactElement[] = [];
            result.push(<div className='dots' key={i}/>);
        }
        return(result)
    }

    return (
        <div className='type'>
            <div>
                <div className='type-static'>name</div>
                <span>{type.type.name}</span>
            </div>
            <div>
                <div className='type-static'>slot</div>
                {howManyDots()}
            </div>
            
            </div>
    );
}
export default Type;