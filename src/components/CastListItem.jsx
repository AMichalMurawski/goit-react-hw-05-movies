import { Li, Img, Description } from './CastList.styled';

const CastListItem = ({ id, name, character, srcImage }) => {
    return (
        <Li>
            {srcImage !== null ? (<Img src={srcImage} alt={`actor ${name}`} />) : <p>No image for {name}</p> }
            <Description>{name}</Description>
            <Description>Character: {character}</Description>
        </Li>
    )
}

export default CastListItem