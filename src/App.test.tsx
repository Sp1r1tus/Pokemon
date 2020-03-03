import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import PokemonList from './Components/PokemonList/PokemonList';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
	adapter: new Adapter()
});

describe('<PokemonList />', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
       <Route path="/" render={() => <PokemonList pokemons={[]} />} />
      </MemoryRouter>
    );
  
    console.log(wrapper.html());
  
    it('renders a static text', () => {
      expect(
        wrapper.contains(<h1>List of all Pokemons</h1>)
      ).toBe(true);
    });
  });