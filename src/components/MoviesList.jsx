import { H2, Ul } from './MovieList.styled';

const MoviesList = ({ title, children }) => {
    return (
        <div>
            <H2>{title}</H2>
            <Ul>
                {children}
            </Ul>
        </div>
    )
}

export default MoviesList