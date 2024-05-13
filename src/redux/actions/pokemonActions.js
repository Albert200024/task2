import * as actionTypes from './pokemonActionTypes';

export const fetchPokemonList = (offset, limit) => {
  return async (dispatch) => {
    try {
      // Fetch data from API
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
      const data = await response.json();
      // Dispatch success action with fetched data

      dispatch({ type: actionTypes.FETCH_POKEMON_LIST_SUCCESS, payload: data });
    } catch (error) {

      // Dispatch failure action if an error occurs
      dispatch({ type: actionTypes.FETCH_POKEMON_LIST_FAILURE, payload: "Erorr"});
    }
  };
};
