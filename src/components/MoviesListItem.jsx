import { Link } from './SharedLayout.styled';

const MoviesListItem = ({movieName}) => {
    return (
        <li><Link to="">{movieName}</Link></li>
    )
}

export default MoviesListItem