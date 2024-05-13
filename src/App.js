import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editName, loadUser, selectName } from './redux/reducers/currentUser/currentUsersReducer';
import { fetchPokemonList } from './redux/actions/pokemonActions';
import { pokemonReducer } from './redux/reducers/pokemon/pokemonReducer';
import PokemonList from './components/PokemonList';
import PokemonPagination from './components/PokemonPagination';
import Header from './components/Header/Header';
import "./style/main.scss"


function App() {
  const dispatch = useDispatch()
  const name = useSelector(selectName);

  useEffect(()=> {
    dispatch(loadUser())
  }, [])


  const { pokemonList, error } = useSelector((state) => state.pokemonReducer);

  useEffect(() => {
    dispatch(fetchPokemonList()); // Dispatch the fetchPokemonList action on component mount
  }, [dispatch]);

  
  return (
    <div className='App width-container '>
       {/* <h1>Hello</h1>
       <h3>{name}</h3>

       <input type='text ' value={name}
         onChange={(evnt) => {
             dispatch(editName(evnt.target.value))
         }}
       />
       */}
       <Header/>
       <PokemonList pokemonList={pokemonList} error={error}/>
       <PokemonPagination pokemonList={pokemonList}/>
    </div>
  );
}

export default App