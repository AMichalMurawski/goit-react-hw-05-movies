import MoviesList from "components/MoviesList";
import MoviesListItem from "components/MoviesListItem";
import { useEffect, useState } from "react";
import {fetchMoviesTrendingDay} from '../js/fetch-the-movie-db.js'

const Home = () => {
  const [movies, setMovies] = useState([{ title: "Batman" }, { title: "Superman" }, { title: "Flash" }])
  
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchMoviesTrendingDay()
      return data
    }
    fetchMovies()
      .then(listOfMovies => {
        setMovies(listOfMovies)
      })
    .catch(error => console.log("Error fetch list of trending movies", error))
  },[])

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList>
        {movies && movies.map((movie, index) => (
          <MoviesListItem key={index} movieName={movie.title} />
        ))}
      </MoviesList>
    </main>
  );
};

export default Home;
