import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import {fetchMovieCast} from '../js/fetch-the-movie-db.js'
import CastListItem from './CastListItem.jsx';
import { Ul } from './CastList.styled';

const CastList = () => {
    const { id } = useParams();
    const [actors, setActors] = useState(undefined);

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
                setActors([])
            })
    }, [id])

    return (
        <>
            {actors
                ? (<Ul>
                    {actors.map(actor => {
                        const { id, srcImage, name, character } = actor;
                        return (<CastListItem key={id} srcImage={srcImage} name={name} character={character} />);
                    })
                    }
                </Ul>)
                : actors === undefined ? (<div>Loading cast...</div>) : (<div>We don't have any casts for this movie</div>)
            }
        </>
    )    
}

export default CastList
