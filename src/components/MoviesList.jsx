const MoviesList = ({title, children}) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {children}
            </ul>
        </div>
    )
}

export default MoviesList