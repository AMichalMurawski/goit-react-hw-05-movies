import { Link } from './SharedLayout.styled';
import { Li, Number } from './MoviesListItem.styled';
import PropTypes from 'prop-types';

const MoviesListItem = ({ linkTo, movieName, fromLocation, number }) => {
  return (
    <Li>
      <Number>{number}</Number>
      <Link to={`${linkTo}`} state={{ from: fromLocation }}>
        {movieName}
      </Link>
    </Li>
  );
};

export default MoviesListItem;

MoviesListItem.propTypes = {
  linkTo: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
  fromLocation: PropTypes.object.isRequired,
  number: PropTypes.number.isRequired,
};
