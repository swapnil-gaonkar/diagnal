import React from "react";
import { v4 as uuidv4 } from 'uuid';
import '../css/MovieList.css'

import { useSelector } from "react-redux";

let withMovieList = WrappedComponent => {

    let NewComponent = () => {
        let state = useSelector(state => state)
        let stateVal = WrappedComponent.name === 'MoviePageOne' ? state.pageNumOne : 
                       WrappedComponent.name === 'MoviePageTwo' ? state.pageNumTwo : 
                       WrappedComponent.name === 'MoviePageThree' ? state.pageNumThree : state.movieList

        let movieListElement =  stateVal.map(movie => 
                                    <div key={uuidv4()} className="movie-list">                                       
                                        <img src={require(`../assets/${movie.poster.includes('posterthatismissing') ? 'placeholder_for_missing_posters.png' : movie.poster}`)} 
                                             alt="movie-poster" loading="lazy"/>
                                        <p title={movie.name}>{movie.name.length > 12 ? `${movie.name.slice(0,12)}...` : movie.name}</p>
                                    </div>) 
                     
        return (
            <WrappedComponent element={movieListElement}/>
        )
    }
    return NewComponent
}

export default withMovieList