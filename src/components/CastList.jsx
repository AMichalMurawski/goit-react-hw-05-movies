import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../api/fetchTheMovies.js';
import CastListItem from './CastListItem.jsx';
import { Ul } from './CastList.styled';

const CastList = () => {
  const { id } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchActors = async () => {
      setIsLoading(true);
      const response = await fetchMovieCast(id);
      if (response !== null) {
        setActors([...response]);
      } else {
        setActors([]);
      }
      setIsLoading(false);
    };
    fetchActors();
  }, [id]);

  return (
    <>
      {!!isLoading ? (
        <div>Loading cast...</div>
      ) : actors.length > 0 ? (
        <Ul>
          {actors.map(actor => {
            const { id, srcImage, name, character } = actor;
            return (
              <CastListItem
                key={id}
                srcImage={srcImage}
                name={name}
                character={character}
              />
            );
          })}
        </Ul>
      ) : (
        <div>We don't have any casts for this movie</div>
      )}
    </>
  );
};

export default CastList;
