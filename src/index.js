import movies from "data/movies.json";
import fetchWithTimeout from "./services";

export function fetchMovies(){
    resolveFunction = () => movies;
    fetchWithTimeout(1000)
    .then(
        resolveFunction()
    )
    
}

const moviePromise = fetchMovies()
    .then(
        resolveFunction (results){
            console.log(results)
        }
)