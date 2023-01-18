import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchMovieReviews } from '../api/fetchTheMovies.js';
import ReviewsListItem from './ReviewsListItem.jsx';
import { Ul } from './ReviewsList.styled';

const ReviewsList = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchReviews = async () => {
            setIsLoading(true)
            const response = await fetchMovieReviews(id)
            if (response !== null) {
                setReviews(response);
            } else {
                setReviews([]);
            }
            setIsLoading(false)
        }
        fetchReviews()
    }, [id])

    return (
        <>  
            {
                isLoading === true ? (<div>Loading reviews...</div>)
                    : reviews.length > 0
                        ? (<Ul>
                            <ReviewsListItem key={"id"} author={"author"} content={"content"} />
                        </Ul>)
                        : (<div>We don't have any reviews for this movie</div>)
            }
        </>
    )
}

export default ReviewsList