import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "services/api";
import { List, Item, ButtonWrap, Wrapper } from "./Home.styled";
import Loader from "components/Loader/Loader";
import NotFound from "components/NotFound/NotFound";

const Home = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log("error:", error);

  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const films = await api.getTrendingMovieDay(page);
        setTotalPages(films.total_pages);
        setFilms(films.results);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchMovies();
  }, [page]);

  const handleDecrement = () => {
    setPage((prev) => prev - 1);
  };

  const handleIncrement = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <List>
            {films.map((film) => {
              return (
                <Item key={film.id}>
                  <Link to={`movies/${film.id}`} state={{ from: location }}>
                    {film.poster_path ? (
                      <img
                        id={film.id}
                        src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                        alt={film.title}
                        loading="lazy"
                      />
                    ) : (
                      <NotFound />
                    )}
                  </Link>
                  <p>
                    <span>{film.vote_average.toFixed(1)}</span>
                  </p>

                  <div>
                    <p>
                      {film.title} | {film.release_date.slice(0, 4)}
                    </p>
                  </div>
                </Item>
              );
            })}
          </List>

          <ButtonWrap>
            <button onClick={handleDecrement} disabled={page <= 1}>
              Назад
            </button>
            <span> {page} </span>
            <button onClick={handleIncrement} disabled={page >= totalPages}>
              Вперед
            </button>
          </ButtonWrap>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
