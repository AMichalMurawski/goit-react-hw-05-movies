const CastListItem = ({id, name, character, srcImage}) => {
    return (
        <li>
            <img src={srcImage} alt={`actor ${name}`} />
            <p>{name}</p>
            <p>Character: {character}</p>
        </li>
    )
}

export default CastListItem