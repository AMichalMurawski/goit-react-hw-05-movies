import { Li } from './ReviewsList.styled';
import PropTypes from 'prop-types';

const ReviewsListItem = ({ author, content }) => {
  return (
    <Li>
      <p>Author: {author}</p>
      <p>{content}</p>
    </Li>
  );
};

export default ReviewsListItem;

ReviewsListItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
