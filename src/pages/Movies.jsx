import MoviesList from "components/MoviesList";
import MoviesListItem from "components/MoviesListItem";
import SearchBar from "components/SearchBar";
import React, { useState } from "react";
import {fetchMoviesSearch} from '../js/fetch-the-movie-db.js'

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = (filter) => {
    const fetchMovies = async () => {
      const response = await fetchMoviesSearch(filter)
      return response
    }
    fetchMovies()
      .then(response => {
        setMovies(response)
      })
    .catch(error => console.log(error))
  }

  return (
    <main>
      <SearchBar searchMovies={filter => searchMovies(filter)} />
      <MoviesList>
        {movies && movies.map((movie, index) => (
          <MoviesListItem key={index} movieName={movie.title} />
        ))}
      </MoviesList>
    </main>
  );
};

export default Movies;
