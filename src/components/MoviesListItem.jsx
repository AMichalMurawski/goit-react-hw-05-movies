import { Link } from './SharedLayout.styled';

const MoviesListItem = ({ linkTo, movieName, location }) => {
    return (
        <li><Link to={`${linkTo}`} state={{from:location}}>{movieName}</Link></li>
    )
}

export default MoviesListItem