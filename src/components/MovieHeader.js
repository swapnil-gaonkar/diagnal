import React from "react";
import { useState } from "react";
import '../css/MovieHeader.css'

import { useDispatch, useSelector } from "react-redux";
import { searchMovie, setQueryCountVal } from './actions/movieActions'

import backButton from "../assets/Back.png"
import searchBar from "../assets/search.png"


function MovieHeader() {

    let state = useSelector(state => state.pageTitle)
    let dispatch = useDispatch()
    let [ searchEnabled, setSearchEnabled ] = useState(false)
    let [ queryText, setQueryText ] = useState('')

    let handleSearch = () => {
        setSearchEnabled(!searchEnabled)
    }

    let handleQuery = (e) => {
        let query = e.target.value
        dispatch(setQueryCountVal(query.length))
        setQueryText(query)
        dispatch(searchMovie(query))
    }

    
    return (
    
            <div className="movie-header-container">
                <img className="movie-header-back" src={backButton} alt="Back Icon"/>
                <div className={searchEnabled ? "scroll-container" : "movie-header-title"}><div className={searchEnabled ? "scroll-text" : ""}>{state}</div></div>

                { 
                    searchEnabled && 
                    <input className="movie-header-input" onChange={handleQuery} type="text" value={queryText}></input> 
                } 

                <img className="movie-header-search" onClick={handleSearch} src={searchBar} alt="Search Icon"/> 
            </div>

    )
}

export default MovieHeader