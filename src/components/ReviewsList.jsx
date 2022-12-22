import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchMovieReviews } from '../js/fetch-the-movie-db.js';
import ReviewsListItem from './ReviewsListItem.jsx';

const ReviewsList = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            const data = await fetchMovieReviews(id)
            return data
        }
        fetchReviews()
            .then(newReviews => {
                setReviews(newReviews)
            })
            .catch(error => {
                console.log("Error fetch list of trending movies", error)
                setReviews(null)
            })
    }, [])

    return (
        <>
            {reviews
                ? (<ul>
                    {reviews.map(review => {
                        const { id, author, content } = review;
                        return (<ReviewsListItem key={id} author={author} content={content} />)
                    })}
                </ul>)
                : (<div>We don't have any reviews for this movie</div>)
            }
        </>
    )
}

export default ReviewsList