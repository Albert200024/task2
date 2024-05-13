import * as actionTypes from "../../actions/pokemonActionTypes";


export const initialPokemon = {
  pokemonList: [],
  error: null,
};

export const pokemonReducer = (state = initialPokemon, action) => {

  switch (action.type) {
    case actionTypes.FETCH_POKEMON_LIST_SUCCESS:
     
      return {
        ...state,
        pokemonList: action.payload,
        error: null,
      };
    case actionTypes.FETCH_POKEMON_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
