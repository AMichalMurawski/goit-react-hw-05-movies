import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c8f343487431a47156d389fa5ccb000e';

const fetchTheMovieDB = (searchUrl, parameters) => {
  return axios
    .get(API_URL + searchUrl, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        ...parameters,
      },
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return null;
    });
};

const fetchMoviesTrendingDay = async () => {
  const searchUrl = '/trending/movie/day';
  const parameters = {};
  const response = await fetchTheMovieDB(searchUrl, parameters);
  if (response === null) {
    return null;
  }
  let moviesList = [];
  response.data.results.forEach(movie => {
    return moviesList.push({ id: movie.id, title: movie.title });
  });
  return moviesList;
};

const fetchMoviesSearch = async filter => {
  const searchUrl = '/search/movie';
  const parameters = {
    query: filter,
    page: 1,
  };
  const response = await fetchTheMovieDB(searchUrl, parameters);
  if (response === null) {
    return null;
  }
  let moviesList = [];
  response.data.results.forEach(movie => {
    const { id, title } = movie;
    return moviesList.push({ id, title });
  });
  return moviesList;
};

const fetchMovieDetails = async id => {
  const searchUrl = `/movie/${id}`;
  const parameters = {};
  const response = await fetchTheMovieDB(searchUrl, parameters);
  if (response === null) {
    return null;
  }
  const { poster_path, title, vote_average, overview, genres, release_date } =
    response.data;
  const movie = {
    src: 'https://image.tmdb.org/t/p/w300' + poster_path,
    title,
    vote_average,
    overview,
    genres,
    year: `${new Date(release_date).getFullYear()}`,
  };
  return movie;
};

const fetchMovieCast = async id => {
  const searchUrl = `/movie/${id}/credits`;
  const parameters = {};
  const response = await fetchTheMovieDB(searchUrl, parameters);
  if (response === null) {
    return null;
  }
  let actors = [];
  response.data.cast.forEach(actor => {
    const { id, profile_path, name, character } = actor;
    return actors.push({
      id,
      srcImage:
        profile_path !== null
          ? 'https://image.tmdb.org/t/p/w200' + profile_path
          : null,
      name,
      character,
    });
  });
  return actors;
};

const fetchMovieReviews = async id => {
  const searchUrl = `/movie/${id}/reviews`;
  const parameters = {};
  const response = await fetchTheMovieDB(searchUrl, parameters);
  if (response === null) {
    return null;
  }
  let reviews = [];
  response.data.results.forEach(review => {
    const { id, author, content } = review;
    return reviews.push({ id, author, content });
  });
  return reviews;
};

export {
  fetchMoviesTrendingDay,
  fetchMoviesSearch,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};
