import React from "react";
import withMovieList from "./withMovieList";

function MoviePageTwo(props) {

    return (
        <div className="movie-page">
            {props.element}
        </div>
    )
}

export default React.memo(withMovieList(MoviePageTwo))