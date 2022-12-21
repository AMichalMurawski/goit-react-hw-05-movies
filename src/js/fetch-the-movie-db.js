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
                return response
            }
            return response
        })
        .then(response => {
            return response
        })
}

const fetchMoviesTrendingDay = async () => {
    const searchUrl = "/trending/movie/day";
    const parameters = {};
    const response = await fetchMovies(searchUrl, parameters);
    let moviesList = [];
    response.data.results.forEach(movie => {
    return moviesList.push({id:movie.id, title:movie.title})
    });
    return moviesList
}

const fetchMoviesSearch = async (filter) => {
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

const fetchMovieDetails = async (id) => {
    const searchUrl = `/movie/${id}`;
    const parameters = {};
    const response = await fetchMovies(searchUrl, parameters);
    console.log("response:", response.data)
    const movie = {
        imageSrc: "https://image.tmdb.org/t/p/w500" + response.data.poster_path,
        title: response.data.title,
        user_score: response.data.vote_average,
        overview: response.data.overview,
        genres: response.data.genres
    }
    console.log()
    console.log("movie:",movie)
    return movie
}

export {fetchMoviesTrendingDay, fetchMoviesSearch, fetchMovieDetails}