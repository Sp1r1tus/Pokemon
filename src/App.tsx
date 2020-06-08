import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PokemonList from './Components/PokemonList/PokemonList';
import { BrowserRouter, Route } from 'react-router-dom';
import DetailView from './Components/DetailView/DetailView';
import Config from './config.json';
import { IPokemon, IAuth } from '../models/models';
import Aux from './hoc/Aux';
import Modal from './UI/Modal/Modal';
import Authentification from './Components/Authentification/Authentification';
import { useSelector, shallowEqual } from 'react-redux';
import { InitialState } from './store/root-reducer';


const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  const { auth } = useSelector<InitialState, IAuth>((state: InitialState) => {
    return {
      auth: state.auth,
      pw: state.pw
    }
  },shallowEqual);

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
      <Modal hide={auth}>
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
