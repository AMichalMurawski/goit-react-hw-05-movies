import { Li } from './ReviewsList.styled';

const ReviewsListItem = ({ author, content }) => {
    return (
        <Li>
            <p>Author: {author}</p>
            <p>{content}</p>
        </Li>
    )
}

export default ReviewsListItem