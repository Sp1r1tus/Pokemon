import React from 'react';
import { IPokemonAbilities } from '../../../models/models';
import Checkbox from '@material-ui/core/Checkbox';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import './Ability.css';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    checkbox: {
        padding: theme.spacing(0),
       
        '& > *': {
          color: 'green',
          fontSize: '20px'
        }
      },
  }),
);

interface IAbilityProps {
    ability: IPokemonAbilities;
}

const Ability: React.FC <IAbilityProps> = ({ ability }) => {
    const howManyDots = () => {
        let result: React.ReactElement[] = [];
        console.log(ability.slot);
        for (let i = 0; i < ability.slot; i++) {
            console.log(i);
            result.push(<div className='dots' key={i}/>);
        }
        console.log(result);
        return(result)
    }
    const classes = useStyles();
    return (
        <div className='ability'>
            <div>
                <div className='ability-static'>name</div>
                <span>{ability.ability.name}</span>
            </div>
            <div>
                <div className='ability-static'>hidden</div>
                <Checkbox
                className={classes.checkbox}
                    disabled
                    size='small'
                    checked={ability.is_hidden}
                    value="disabled checked"
                    inputProps={{ 'aria-label': 'disabled checked checkbox' }}
                />
            </div>
            <div>
                <div className='ability-static'>slot</div>
                {howManyDots()}
            </div>
            </div>
    );
}
export default Ability;