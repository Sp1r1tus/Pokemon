import React from 'react';
import { IPokemon } from '../../../models/models';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './PokemonGraphQL.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        '& > *': {
          margin: theme.spacing(1),
          color: 'green'
        }
      },
  }),
);


interface IPokemonProps {
    pokemon: IPokemon;
}

const Pokemon: React.FC <IPokemonProps> = ({ pokemon }) => {

    const classes = useStyles();
    return (
        <>
            <div className='pokemon-item'>
                <Link to={`/${pokemon.name}`}>
                  <Button fullWidth={true} size='large' className={classes.button} variant="outlined">
                    {pokemon.name}
                    <div className='pokemon-index'>nbr {pokemon.id}</div>
                  </Button>
                </Link>
            </div>
        </>
    );
}
export default Pokemon;