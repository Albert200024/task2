import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList } from '../redux/actions/pokemonActions';

function PokemonPagination({pokemonList}) {
  const dispatch = useDispatch()

  const limit = 20; 
  const [countPage, setCountPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(1); 
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Fetch data when component mounts or offset changes
    dispatch(fetchPokemonList(offset, limit));
  }, [dispatch, offset]);

  useEffect(() => {
    // Fetch data when component mounts or offset changes
    dispatch(fetchPokemonList(offset, limit));
  }, [dispatch, offset]);

  const handleNextClick = () => {
    // Increment offset by the limit to load next page
    setCurrentPage(currentPage + 1)
    setOffset(prevOffset => prevOffset + limit);
    console.log(currentPage, offset)
  };

  const handlePrevClick = () => {
    // Decrement offset by the limit to load previous page
    setCurrentPage(currentPage - 1)
    setOffset(prevOffset => Math.max(0, prevOffset - limit));


  };

  return (
    <nav>
    <ul className="pokemon-pagination">
      <button onClick={handlePrevClick} disabled={offset === 0}>Prev</button>
      <div>
        <span>Page {currentPage}</span>
         { 
         
         }
      </div>
      <button onClick={handleNextClick} disabled={offset == 880}>Next</button>
    </ul>
  </nav>
  );
}

export default PokemonPagination;