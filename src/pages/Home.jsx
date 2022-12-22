import MoviesList from "components/MoviesList";
import MoviesListItem from "components/MoviesListItem";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {fetchMoviesTrendingDay} from '../js/fetch-the-movie-db.js'

const Home = () => {
  const [movies, setMovies] = useState([])
  const location = useLocation();

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
        {movies && movies.map((movie, index) => (
          <MoviesListItem key={`${movie.id}`} number={index+1} linkTo={"movies/"+movie.id} fromLocation={location} movieId={movie.id} movieName={movie.title} />
        ))}
      </MoviesList>
    </main>
  );
};

export default Home;
