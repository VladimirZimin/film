import Loader from "components/Loader/Loader";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import api from "services/api";
import { StyledLink } from "./MovieDetails.styled";
import NotFound from "components/NotFound/NotFound";

const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        const film = await api.getMoviesDetails(movieId);
        console.log("film:", film);
        setFilmDetails(film);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchDetails();
  }, [movieId]);

  if (!filmDetails) return null;

  // const handleClick = async () => {
  //   const treiler = await api.fetchTrailersOfMovie(filmDetails.imdb_id);
  //   setTrailerLink(treiler.data.linkEmbed);
  // };

  return (
    <>
      <Link to={backLinkLocationRef.current}>Назад</Link>
      {error && isLoading ? (
        <Loader />
      ) : (
        <div>
          {filmDetails.poster_path ? (
            <img
              id={filmDetails.id}
              src={`https://image.tmdb.org/t/p/w500/${filmDetails.poster_path}`}
              alt={filmDetails.title}
              loading="lazy"
            />
          ) : (
            <NotFound />
          )}
          <h1>
            {filmDetails.title} ({filmDetails.release_date.slice(0, 4)})
          </h1>

          <p>Рейтинг: {filmDetails.vote_average.toFixed(1)}</p>
          <p>Про фільм: {filmDetails.overview}</p>
          <p>
            Жанр:{" "}
            {filmDetails.genres &&
              filmDetails.genres.map((genre) => {
                return <span key={genre.name}>{genre.name} </span>;
              })}
          </p>
          <p>
            <button type="button">Додати в обране</button>
          </p>
          <div>
            <h2>Додаткова інформація</h2>
            <ul>
              <li>
                <h3>
                  <StyledLink to="trailer">Дивитися трейлер</StyledLink>
                </h3>
              </li>
              <li>
                <h3>
                  <StyledLink to="cast">Акторський склад</StyledLink>
                </h3>
              </li>
              <li>
                <h3>
                  <StyledLink to="reviews">Відгуки</StyledLink>
                </h3>
              </li>
            </ul>
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
