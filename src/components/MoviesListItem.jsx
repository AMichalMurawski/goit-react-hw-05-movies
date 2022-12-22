import { Link } from './SharedLayout.styled';

const MoviesListItem = ({ linkTo, movieName, fromLocation }) => {
    return (
        <li><Link to={`${linkTo}`} state={{from:fromLocation}}>{movieName}</Link></li>
    )
}

export default MoviesListItem