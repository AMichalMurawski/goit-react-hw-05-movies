import { H2, Ul } from './MovieList.styled';
import PropTypes from 'prop-types';

const MoviesList = ({ title, children }) => {
  return (
    <div>
      <H2>{title}</H2>
      <Ul>{children}</Ul>
    </div>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
