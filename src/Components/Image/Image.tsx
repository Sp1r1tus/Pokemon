import React from 'react';
import { IPokemonPicture } from '../../../models/models';

interface IimageProps {
    pictures?: IPokemonPicture;
}

const Image: React.FC <IimageProps> = ({ pictures }) => {
    return (
        <div>
            <img src={pictures?.back_default} alt='' />
            <img src={pictures?.back_female} alt='' />
            <img src={pictures?.back_shiny} alt='' />
            <img src={pictures?.back_shiny_female} alt='' />
            <img src={pictures?.front_default} alt='' />
            <img src={pictures?.front_female} alt='' />
            <img src={pictures?.front_shiny} alt='' />
            <img src={pictures?.front_shiny_female} alt='' />
        </div>
    );
}
export default Image;