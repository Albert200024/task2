import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList } from '../redux/actions/pokemonActions';
import "../style/pokemonListStyle/style.scss"

export default function PokemonList ({pokemonList, error}){

    return (
        <div>
           {error ? (
             <p>Error</p>
           ): (
            pokemonList.length == 0 ? <p>Loading</p> :
            <div className='pokemenList'>
              {pokemonList.results.map((pokemon, index) => (
                 <div>
                     <p>{pokemon.name}</p>
                     <img src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}/>
                  </div>
                
              ))}
            </div>
           )
           }
        </div>
    )
}