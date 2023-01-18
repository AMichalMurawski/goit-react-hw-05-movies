import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../api/fetchTheMovies.js';
import CastListItem from './CastListItem.jsx';
import { Ul } from './CastList.styled';

const CastList = () => {
  const { id } = useParams();
  const [actors, setActors] = useState(undefined);

  useEffect(() => {
    const fetchActors = async () => {
      const response = await fetchMovieCast(id);
      if (response !== null) {
        setActors([...response]);
      } else {
        setActors([]);
      }
    };
    fetchActors();
  }, [id]);

  return (
    <>
      {actors ? (
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
      ) : actors === undefined ? (
        <div>Loading cast...</div>
      ) : (
        <div>We don't have any casts for this movie</div>
      )}
    </>
  );
};

export default CastList;
