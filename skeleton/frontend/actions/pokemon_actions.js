import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKE = 'RECEIVE_POKE';


export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePoke = (poke) => ({
  type: RECEIVE_POKE,
  poke
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestPoke = (id) => (dispatch) => {
  return APIUtil.fetchPoke(id)
    .then(poke => dispatch(receivePoke(poke)));
};
