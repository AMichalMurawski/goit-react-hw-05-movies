import { Link } from './SharedLayout.styled';

const MoviesListItem = ({movieId, movieName}) => {
    return (
        <li><Link to={`${movieId}`}>{movieName}</Link></li>
    )
}

export default MoviesListItem