import MoviesList from "components/MoviesList";
import MoviesListItem from "components/MoviesListItem";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {fetchMoviesTrendingDay} from '../api/fetchTheMovies.js'

const Home = () => {
  const [movies, setMovies] = useState([])
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetchMoviesTrendingDay()
      if (response !== null) {
        setMovies(response);
      } else {
        setMovies([]);
      }
    }
    fetchMovies()
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
