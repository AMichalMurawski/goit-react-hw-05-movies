import MoviesList from "components/MoviesList";
import MoviesListItem from "components/MoviesListItem";
import { useEffect, useState } from "react";
import {fetchMoviesTrendingDay} from '../js/fetch-the-movie-db.js'

const Home = () => {
  const [movies, setMovies] = useState([])
  
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
      <MoviesList title="Trending today">
        {movies && movies.map(movie => (
          <MoviesListItem key={`${movie.id}`} linkTo={"movies/"+movie.id} movieId={movie.id} movieName={movie.title} />
        ))}
      </MoviesList>
    </main>
  );
};

export default Home;
