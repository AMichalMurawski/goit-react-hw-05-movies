import { Li, Img, Description } from './CastList.styled';
import PropTypes from 'prop-types';

const CastListItem = ({ name, character, srcImage }) => {
  return (
    <Li>
      {srcImage !== null ? (
        <Img src={srcImage} alt={`actor ${name}`} />
      ) : (
        <p>No image for {name}</p>
      )}
      <Description>{name}</Description>
      <Description>Character: {character}</Description>
    </Li>
  );
};

export default CastListItem;

CastListItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  srcImage: PropTypes.string,
};
