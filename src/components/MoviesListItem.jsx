import { Link } from './SharedLayout.styled';
import { Li, Number } from './MoviesListItem.styled';

const MoviesListItem = ({ linkTo, movieName, fromLocation, number }) => {
    return (
        <Li><Number>{number}</Number><Link to={`${linkTo}`} state={{from:fromLocation}}>{movieName}</Link></Li>
    )
}

export default MoviesListItem