import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PokemonList from './Components/PokemonList/PokemonList';
import { BrowserRouter, Route } from 'react-router-dom';
import DetailView from './Components/DetailView/DetailView';
import Config from './config.json';
import { IPokemon } from '../models/models';

function App(): JSX.Element {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  useEffect(() => {
    const loadData = async () => {
      const responseCount = await Axios.get(`${Config.API_URL}?limit=1&offset=1`);      
      const responsePokemons = await Axios.get(`${Config.API_URL}?limit=${responseCount.data.count}&offset=0`);
      setPokemons(responsePokemons.data.results);
    };
    loadData();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Route exact={true} path='/'><PokemonList pokemons={pokemons}/></Route>
        <Route path='/:name' exact component={DetailView}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
