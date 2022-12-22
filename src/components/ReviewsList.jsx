import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchMovieReviews } from '../js/fetch-the-movie-db.js';
import ReviewsListItem from './ReviewsListItem.jsx';
import { Ul } from './ReviewsList.styled';

const ReviewsList = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState(undefined);

    useEffect(() => {
        const fetchReviews = async () => {
            const data = await fetchMovieReviews(id)
            return data
        }
        fetchReviews()
            .then(newReviews => {
                if (newReviews.length > 0) {
                    setReviews(newReviews)
                } else {
                    setReviews(null)
                }
            })
            .catch(error => {
                console.log("Error fetch list of trending movies", error)
                setReviews(null)
            })
    }, [id])

    return (
        <>
            {reviews
                ? (<Ul>
                    {reviews.map(review => {
                        const { id, author, content } = review;
                        return (<ReviewsListItem key={id} author={author} content={content} />)
                    })}
                </Ul>)
                : reviews === undefined ? (<div>Loading reviews...</div>) : (<div>We don't have any reviews for this movie</div>)
            }
        </>
    )
}

export default ReviewsList