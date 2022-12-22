import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import {fetchMovieCast} from '../js/fetch-the-movie-db.js'
import CastListItem from './CastListItem.jsx';

const CastList = () => {
    const { id } = useParams();
    const [actors, setActors] = useState(null);

    useEffect(() => {
        const fetchActors = async () => {
            const data = await fetchMovieCast(id)
            return data
        }
        fetchActors()
            .then(newActors => {
                setActors([...newActors])
            })
            .catch(error => {
                // console.log("Error fetch list of trending movies", error)
                setActors(null)
            })
    }, [])

    return (
        <>
            {actors
                ? (<ul>
                    {actors.map(actor => {
                        const { id, srcImage, name, character } = actor;
                        return (<CastListItem key={id} srcImage={srcImage} name={name} character={character} />);
                    })
                    }
                </ul>)
                : (<div>We can't find cast...</div>)
            }
        </>
    )    
}

export default CastList
