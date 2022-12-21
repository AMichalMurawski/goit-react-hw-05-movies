import axios from "axios";

const THEMOVIEDB_URL = "https://api.themoviedb.org/3"
const THEMOVIEDB_KEY = 'c8f343487431a47156d389fa5ccb000e';

const fetchMovies = (searchUrl, parameters) =>{
    return axios.get(THEMOVIEDB_URL + searchUrl, {
        params: {
            api_key: THEMOVIEDB_KEY,
            ...parameters
        }
    })
        .then(response => {
            if (response.status === 404) {
                throw Error ("Can't find data!")
            }
            return response
        })
        .then(response => {
            return response
        })
        .catch(error => error)
}

const fetchMoviesTrendingDay = async () => {
    const searchUrl = "/trending/all/day";
    const parameters = {};
    const response = await fetchMovies(searchUrl, parameters);
    let moviesList = [];
    response.data.results.forEach(movie => {
        let title = "";
        if (movie.title) {
            title=movie.title
        } else {
            title=movie.name
        }
        return moviesList.push({id:movie.id, title})
    });
    return moviesList
}

const fetchMoviesSearch = async (filter) => {
    console.log(filter)
    const searchUrl = "/search/movie";
    const parameters = {
        query: filter,
        page: 1,
    };
    const response = await fetchMovies(searchUrl, parameters);
    let moviesList = [];
    response.data.results.forEach(movie => {
        let title = "";
        if (movie.title) {
            title=movie.title
        } else {
            title=movie.name
        }
        return moviesList.push({id:movie.id, title})
    });
    return moviesList
}

export {fetchMoviesTrendingDay, fetchMoviesSearch}