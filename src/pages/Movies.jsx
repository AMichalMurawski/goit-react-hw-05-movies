import MoviesList from "components/MoviesList";
import MoviesListItem from "components/MoviesListItem";
import SearchBar from "components/SearchBar";
import React, { useState } from "react";
import {fetchMoviesSearch} from '../js/fetch-the-movie-db.js'

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isList, setIsList] = useState(null)

  const searchMovies = (filter) => {
    if (filter) {
      const fetchMovies = async () => {
        const response = await fetchMoviesSearch(filter)
        return response
      }
      fetchMovies()
        .then(response => {
          if (response.length > 0) {
            setMovies(response)
            setIsList(true)
          } else {
            setIsList(false)
          }
        })
        .catch(error => {
          console.log(error)
          setIsList(false)
        })
    }
  }

  return (
    <main>
      <SearchBar searchMovies={filter => searchMovies(filter)} />
      {isList === null
        ? (<></>)
        : (isList
          ? (<MoviesList>
        {movies && movies.map(movie => (
          <MoviesListItem key={movie.id} movieId={movie.id} movieName={movie.title} />
        ))}
      </MoviesList>)
            : (<div><p>No results</p></div>)
        )
      }
      
    </main>
  );
};

export default Movies;
