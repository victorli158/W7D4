import { RECEIVE_POKE } from '../actions/pokemon_actions';
import merge from 'lodash/merge';
const defaultState = {
  items: []
};

const pokemonDetailReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POKE:
      return action.poke;
    default:
      return state;
  }
};

export default pokemonDetailReducer;
