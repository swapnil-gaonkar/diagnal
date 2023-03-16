import React from "react";
import withMovieList from "./withMovieList";

function MoviePageOne(props) {

    return (
        <div className="movie-page">
            {props.element}
        </div>
    )
}

export default React.memo(withMovieList(MoviePageOne))