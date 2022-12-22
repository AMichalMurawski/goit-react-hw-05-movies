import { useState } from 'react';
import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {fetchMovieDetails} from '../js/fetch-the-movie-db.js'
import { Container, Link, Back, Img, Movie, H2, List, Options } from '../components/SharedLayout.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchMovieDetails(id)
      return data
    }
    fetchMovies()
      .then(response => {
        setMovie(response)
      })
      .catch(error => {
        console.log("Error fetch list of trending movies", error)
        setMovie("");
      })
  },[id])

  return (
    <main>
      <Container>
      <Back to={location.state ? location.state.from : "/"}>&#x2190; Go back</Back>
      {movie !== null ? (
        (movie ? (
          <>
            <Movie>
              <Img src={movie.src} alt={`${movie.title} movie poster`} />
              <div>
                  <H2>{movie.title} ({movie.year})</H2>
                <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
                <h3>Overview</h3>
                <p>
                  {movie.overview}
                </p>
                <h3>Genres</h3>
                <List>
                  {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                </List>
              </div>
            </Movie>
            <Options>
              <p>Additional information</p>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
            </Options>
          </>) 
        : (<div>There is no result for this id!</div>))
      ) 
        : (<>Loading movie...</>)}
      </Container>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
