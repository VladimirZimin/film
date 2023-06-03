import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "services/api";
import Loader from "components/Loader/Loader";
import NotFound from "components/NotFound/NotFound";

const Cast = () => {
  const { movieId } = useParams();
  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetcCost = async () => {
      try {
        setIsLoading(true);
        const cast = await api.getMoviesCredits(movieId);
        setFilms(cast.cast);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetcCost();
  }, [movieId]);

  if (!films) return null;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {films.map((film) => (
            <li key={film.id}>
              {film.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${film.profile_path}`}
                  alt={film.name}
                />
              ) : (
                <NotFound />
              )}
              <p>Ім'я актора: {film.name}</p>
              <p>Ім'я персонажа: {film.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
