import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PokemonList from './Components/PokemonList/PokemonList';
import { BrowserRouter, Route } from 'react-router-dom';
import DetailView from './Components/DetailView/DetailView';
import Config from './config.json';
import { IPokemon } from '../models/models';
import Aux from './hoc/Aux';
import Modal from './UI/Modal/Modal';
import Authentification from './Components/Authentification/Authentification';
import { useSelector, shallowEqual } from 'react-redux';
import { Ireducers } from './store/root-reducer';
// import { InitialState } from './store/root-reducer';

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  const authorization = useSelector<Ireducers>((state: Ireducers) => {
    return state.authReducer.auth
  },shallowEqual); 

/*   const authorization = useSelector<InitialState>((state: InitialState) => {
    return {
      authorization: state.auth
    }
  },shallowEqual);  */

  useEffect(() => {
    const loadData = async () => {
      const responseCount = await Axios.get(`${Config.API_URL}?limit=1&offset=1`);
      Axios.get(`${Config.API_URL}?limit=${responseCount.data.count}&offset=0`)
        .then(response => { setPokemons(response.data.results); });
    };
    loadData();
  }, []);

  return (
  
    <Aux>
      <Modal hide={authorization}>
        <Authentification />
      </Modal>
      <BrowserRouter>
        <Route exact={true} path='/'><PokemonList pokemons={pokemons}/></Route>
        <Route path='/:name' exact component={DetailView}/>
      </BrowserRouter>
    </Aux>
  );
}

export default App;
