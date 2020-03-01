import React from 'react';
import { IPokemonAbilities } from '../../../models/models';
import Checkbox from '@material-ui/core/Checkbox';

interface IAbilityProps {
    ability: IPokemonAbilities;
}

const Ability: React.FC <IAbilityProps> = ({ ability }) => {
    console.log(ability);
    return (
        <>
            <label>ability name</label>
            <div>{ability.ability.name}</div>
            <label>hidden</label>
            <Checkbox
                disabled
                checked={ability.is_hidden}
                value="disabled checked"
                inputProps={{ 'aria-label': 'disabled checked checkbox' }}
            />
            <label>slot</label>
            <div>{ability.slot}</div>
        </>
    );
}
export default Ability;