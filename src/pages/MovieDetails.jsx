import { lazy, useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import {fetchMovieDetails} from '../api/fetchTheMovies.js'
import { Container, Link, Back, Img, Movie, H2, List, Options } from '../components/SharedLayout.styled';

const CastList = lazy(() => import('../components/CastList'));
const ReviewsList = lazy(() => import('../components/ReviewsList'));

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetchMovieDetails(id)
      if (response !== null) {
        setMovie(response);
      } else {
        setMovie("");
      }
    }
   fetchMovies()

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
        <Routes>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<ReviewsList />} />
        </Routes>
    </main>
  );
};

export default MovieDetails;
