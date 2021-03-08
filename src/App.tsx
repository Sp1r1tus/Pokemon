import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PokemonList from './Components/PokemonList/PokemonList';
import { BrowserRouter, Route } from 'react-router-dom';
import DetailView from './Components/DetailView/DetailView';
import Config from './config.json';
import { IPokemon } from '../models/models';
import AuthContext from './context/auth-context';
import Aux from './hoc/Aux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PokemonListGraphQL } from './Components/PokemonListGraphQL/PokemonListGraphQL';

function App(): JSX.Element {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  useEffect(() => {
    const loadData = async () => {
      const responseCount = await Axios.get(`${Config.API_URL}?limit=1&offset=1`);
      Axios.get(`${Config.API_URL}?limit=${responseCount.data.count}&offset=0`)
        .then(response => { setPokemons(response.data.results); });
    };
    loadData();
  }, []);

  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app',
    cache: new InMemoryCache()
  })


  const loginHandler = () => {
    if (Config.PASSWORD === password) {
      setAuthenticated(true);
    }
    else {
      setAuthenticated(false);
    }
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Aux>
      <AuthContext.Provider 
        value={{
          authenticated: authenticated
        }}
      >
        <label>Enter Password to see detailed view </label>
        <input type='password' onChange={(e) => changeHandler(e)}/>
        <button onClick={loginHandler}>Submit</button>
        <ApolloProvider client={client}>
        <BrowserRouter>
          <Route exact={true} path='/'><PokemonListGraphQL/></Route>
          <Route path='/:name' exact component={DetailView}/>
        </BrowserRouter>
        </ApolloProvider>
      </AuthContext.Provider>
     
    
    </Aux>
  );
}

export default App;
