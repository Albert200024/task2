import { applyMiddleware, combineReducers, createStore } from "redux";
import { currentUsersReducer, initialCurrentUser } from "./reducers/currentUser/currentUsersReducer";
import { pokemonReducer, initialPokemon } from "./reducers/pokemon/pokemonReducer";
import { thunk } from "redux-thunk";

const store = createStore(combineReducers({
    currentUsers:currentUsersReducer,
    pokemonReducer:pokemonReducer
}), {
    currentUsers: initialCurrentUser,
    pokemon:initialPokemon
}, applyMiddleware(thunk))

export default store