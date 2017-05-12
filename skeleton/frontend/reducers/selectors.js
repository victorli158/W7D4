import values from 'lodash/values';

export const selectAllPokemon = ({ pokemon }) => values(pokemon);

export const selectPokemonItem = ({ pokemonDetail }, itemID) => {
  for (let i = 0; i < pokemonDetail.items.length; i++) {
    
  }
};
