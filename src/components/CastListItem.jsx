const CastListItem = ({id, name, character, srcImage}) => {
    return (
        <li>
            {srcImage !== null ? (<img src={srcImage} alt={`actor ${name}`} />) : <p>No image for {name}</p> }
            <p>{name}</p>
            <p>Character: {character}</p>
        </li>
    )
}

export default CastListItem