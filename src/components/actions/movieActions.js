export function searchMovie(query) {
    return {
        type : 'SEARCH',
        payload : query.toLowerCase()
    }
}

export function setQueryCountVal(query) {
    return {
        type : 'QUERY_COUNT',
        payload : query
    }
}