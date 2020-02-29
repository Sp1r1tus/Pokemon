import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PokemonList from './Components/PokemonList/PokemonList';

const API_URL = 'http://pokeapi.co/api/v2/pokemon/'

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const responseCount = await Axios.get(`${API_URL}?limit=1&offset=1`);      
      const responsePokemons = await Axios.get(`${API_URL}?limit=${responseCount.data.count}&offset=20`);
      setPokemons(responsePokemons.data.results);
    };
    loadData();   
  }, []);
  return (
    <div>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
