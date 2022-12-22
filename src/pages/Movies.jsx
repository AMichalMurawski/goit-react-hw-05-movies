import MoviesList from "components/MoviesList";
import MoviesListItem from "components/MoviesListItem";
import SearchBar from "components/SearchBar";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import {fetchMoviesSearch} from '../js/fetch-the-movie-db.js'

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState();
  const [isList, setIsList] = useState(null)
  const [filter, setFilter] = useState(searchParams.get("query"));
  const location = useLocation();

  useEffect(() => {
    if (filter) {
      setSearchParams({query: filter})
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
  },[filter])

  const searchMovies = (filter) => {
    if (filter) {
      setFilter(filter)
    }
  }

  return (
    <main>
      <SearchBar filter={filter} searchMovies={filter => searchMovies(filter)} />
      {isList === null
        ? (<></>)
        : (isList
          ? (<MoviesList>
        {movies && movies.map(movie => (
          <MoviesListItem key={movie.id} linkTo={movie.id} location={location} movieId={movie.id} movieName={movie.title} />
        ))}
      </MoviesList>)
            : (<div><p>No results</p></div>)
        )
      }
      
    </main>
  );
};

export default Movies;
