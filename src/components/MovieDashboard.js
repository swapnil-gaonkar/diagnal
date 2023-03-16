import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import '../css/MovieDashboard.css'

import withMovieList from "./withMovieList";
import MoviePageOne from "./MoviePageOne";

let MoviePageTwo = React.lazy(() => import('./MoviePageTwo')); 
let MoviePageThree = React.lazy(() => import('./MoviePageThree')); 


function MovieDashboard(props) {
    let state = useSelector(state => state)

    return (
        <div className="movie-dashboard">
            {
                state.queryCount > 0 ? 
                    state.movieList.length > 0 ?
                        (<div className="movie-page">
                            {props.element}
                         </div>)  : <p className="not-found">No movie titles match your search.</p> :
                            <>
                                <MoviePageOne />
                                <Suspense fallback={<>Loading...</>}>
                                    <MoviePageTwo />
                                    <MoviePageThree />
                                </Suspense>
                               
                            </>    
            }
        </div>
        
    )
    
}

export default React.memo(withMovieList(MovieDashboard))