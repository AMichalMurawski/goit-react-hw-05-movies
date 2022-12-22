const ReviewsListItem = ({author, content}) => {
    return (
        <li>
            <p>Author: {author}</p>
            <p>{content}</p>
        </li>
    )
}

export default ReviewsListItem