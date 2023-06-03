import Loader from "components/Loader/Loader";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import api from "services/api";
import NotFound from "components/NotFound/NotFound";
import { Input, Form, Item, List, Button, Search } from "./Movies.styled";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (query === "") return;

    const fetchSearchMovie = async (query) => {
      try {
        setIsLoading(true);
        const film = await api.getSearchMovies(query);
        setFilms(film.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchSearchMovie(query);
  }, [query]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    // form.elements.query.value = "";
    form.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Може містити тільки літери, апостроф, тире та пробіли. Наприклад 'луна'"
          autoComplete="off"
          autoFocus
          placeholder="Пошук фільму..."
        />
        <Button type="submit">
          <Search />
        </Button>
      </Form>

      {films.length > 0 && (
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <List>
              {films.map((film) => {
                return (
                  <Item key={film.id}>
                    <Link to={`${film.id}`} state={{ from: location }}>
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
          )}
        </div>
      )}
    </div>
  );
};

export default Movies;
