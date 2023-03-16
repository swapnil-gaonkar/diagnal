import { createStore } from "redux";
import movieListReducer from "../reducer/movieListReducer";

let store = createStore(movieListReducer)

export default store