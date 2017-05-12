import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  constructor(props) {
    super(props);
  }

  render() {
    const pokemonItems = this.props.pokemon.map(poke => <PokemonIndexItem
                                                key={poke.id}
                                                pokemon={poke}
                                                image={poke.image_url}
                                                />);

    return (
      <section className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
        <Route path="/pokemon/:id" component={PokemonDetailContainer}/>
      </section>
    );
  }
}

export default PokemonIndex;
