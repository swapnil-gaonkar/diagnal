import pageOne from "../../api/pageOne.json"
import pageTwo from "../../api/pageTwo.json"
import pageThree from "../../api/pageThree.json"

let pageNumOne = pageOne.page["content-items"].content.map(movie => ({name: movie.name, poster: movie["poster-image"]}))
let pageNumTwo = pageTwo.page["content-items"].content.map(movie => ({name: movie.name, poster: movie["poster-image"]}))
let pageNumThree = pageThree.page["content-items"].content.map(movie => ({name: movie.name, poster: movie["poster-image"]}))
let pageTitle = pageOne.page.title

let initialState = { 
    movieList : [ ...pageNumOne, ...pageNumTwo, ...pageNumThree ],
    pageNumOne,
    pageNumTwo,
    pageNumThree,
    queryCount : 0,
    pageTitle
}

let movieListReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'SEARCH' : return {
            ...state,
            movieList : action.payload.length === 0 ? 
                            initialState.movieList : 
                            [...state.movieList].filter(movie => movie.name.toLowerCase().includes(action.payload))     
        }
        break

        case 'QUERY_COUNT' : return {
            ...state,
            queryCount : action.payload  
        }
        break

        default : return state
    }

}

export default movieListReducer