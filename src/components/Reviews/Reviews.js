import Loader from "components/Loader/Loader";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "services/api";

const Reviews = () => {
  const { movieId } = useParams();
  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetcCost = async () => {
      try {
        setIsLoading(true);
        const reviews = await api.getMoviesReviews(movieId);
        setFilms(reviews);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.log(error);
      }
    };
    fetcCost();
  }, [movieId]);

  if (!films) return null;

  return (
    <div>
      {error && isLoading ? (
        <Loader />
      ) : (
        <ul>
          {films.map((film) => (
            <li key={film.id}>
              <p>
                <b>Автор: {film.author}</b>
              </p>
              <p>{film.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
