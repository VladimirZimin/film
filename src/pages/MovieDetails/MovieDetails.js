import Loader from "components/Loader/Loader";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Backdrop,
  BackdropWrapper,
  Image,
  StyledLink,
} from "./MovieDetails.styled";
import NotFound from "components/NotFound/NotFound";
import { imgUrl, imgUrlLarge } from "services/apiConst";
import {
  useAddFavoriteMutation,
  useAddWatchlistMutation,
  useGetFavoriteQuery,
  useGetMoviesDetailsQuery,
  useGetMoviesImgDetailsQuery,
  useGetWatchlistQuery,
} from "redux/movies/moviesApi";
import { useSelector } from "react-redux";
import { selectSessionId, selectUserId } from "redux/selectors";
import { Box, Button, List, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const MovieDetails = () => {
  const [isAddFavorite, setIsAddFavorite] = useState(null);
  const [isAddWatchlist, setIsAddWatchlist] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");
  const sessionId = useSelector(selectSessionId);
  const { id } = useSelector(selectUserId);

  const fetchData = {
    sessionId: sessionId,
    id: id,
    page: 1,
  };

  const [addFavorite] = useAddFavoriteMutation();
  const [addWatchlist] = useAddWatchlistMutation();
  const { data, isLoading, isError } = useGetMoviesDetailsQuery(movieId);
  const { data: dataImg } = useGetMoviesImgDetailsQuery(movieId);
  const { data: watchlist } = useGetWatchlistQuery(fetchData);
  const { data: favorite } = useGetFavoriteQuery(fetchData);

  useEffect(() => {
    if (watchlist) {
      setIsAddWatchlist(
        !!watchlist.results.find((item) => String(item.id) === movieId)
      );
    }
  }, [movieId, watchlist]);

  useEffect(() => {
    if (favorite) {
      setIsAddFavorite(
        !!favorite.results.find((item) => String(item.id) === movieId)
      );
    }
  }, [movieId, favorite]);

  const handleAddFavorite = () => {
    const data = {
      sessionId: sessionId,
      id: id,
      favorite: {
        media_type: "movie",
        media_id: movieId,
        favorite: !isAddFavorite,
      },
    };
    setIsAddFavorite((prevState) => !prevState);
    addFavorite(data);
  };

  const handleAddWatchlist = () => {
    const data = {
      sessionId: sessionId,
      id: id,
      watchlist: {
        media_type: "movie",
        media_id: movieId,
        watchlist: !isAddWatchlist,
      },
    };
    setIsAddWatchlist((prevState) => !prevState);
    addWatchlist(data);
  };

  return (
    <>
      <Link
        style={{
          position: "fixed",
          top: "70px",
          left: "20px",
          border: "2px solid #ea5f5f",
          borderRadius: "50%",
        }}
        to={backLinkLocationRef.current}
      >
        <ArrowBackIcon style={{ fontSize: "30px", color: "#ffffff" }} />
      </Link>
      {isLoading && !isError ? (
        <Loader />
      ) : (
        <>
          {dataImg ? (
            <Box>
              <BackdropWrapper>
                <Backdrop>
                  <Image
                    id={data.id}
                    src={`${imgUrlLarge}${dataImg.backdrops[4]?.file_path}`}
                    alt={data.title}
                    loading="lazy"
                  />
                </Backdrop>
              </BackdropWrapper>

              <div
                style={{
                  position: "absolute",
                  background: `linear-gradient(0deg, rgb(31, 29, 43) 10%, rgba(21, 21, 21, 0.5) 150%)`,
                  inset: "0px",
                  zIndex: -1,
                }}
              ></div>
              <Grid container="true" sx={{ mb: "45px" }}>
                <Grid xs={2.5} lg={4} xsOffset={1} lgOffset={0.5}>
                  <Box
                    container="true"
                    sx={{
                      display: "flex",
                      alignItems: "start",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      component={Paper}
                      elevation={10}
                      sx={{
                        width: "300px",
                        borderRadius: "17px",
                        mt: "100px",
                      }}
                    >
                      {data.poster_path ? (
                        <img
                          id={data.id}
                          src={`${imgUrl}${data.poster_path}`}
                          alt={data.title}
                          loading="lazy"
                          style={{ borderRadius: "15px" }}
                        />
                      ) : (
                        <NotFound />
                      )}
                    </Box>

                    <Box>
                      <Stack
                        direction="row"
                        sx={{
                          mt: 2,
                          width: "300px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="outlined"
                          startIcon={
                            isAddFavorite ? <DeleteIcon /> : <AddCircleIcon />
                          }
                          onClick={handleAddFavorite}
                          sx={{
                            color: "#ffffff",
                            borderColor: "#ffffff",
                            borderRadius: "10px",
                            "&:hover": {
                              color: "#ea5f5f",
                              borderColor: "#ea5f5f",
                            },
                          }}
                        >
                          в обране
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={
                            isAddWatchlist ? <DeleteIcon /> : <AddCircleIcon />
                          }
                          onClick={handleAddWatchlist}
                          sx={{
                            color: "#ffffff",
                            borderColor: "#ffffff",
                            borderRadius: "10px",
                            "&:hover": {
                              color: "#ea5f5f",
                              borderColor: "#ea5f5f",
                            },
                          }}
                        >
                          переглянути
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                </Grid>

                <Grid
                  xs={11}
                  lg={7}
                  xsOffset={1}
                  lgOffset={0}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    container="true"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mt: "100px",
                      pr: "50px",
                      color: "#ffffff",
                    }}
                  >
                    <Box sx={{ fontSize: "16px", marginBottom: "30px" }}>
                      <p>
                        {data.release_date.slice(0, 4)}
                        {data.production_countries.map(
                          (coutry) => `, ${coutry.name}`
                        )}
                      </p>
                      <p>Рейтинг: {data.vote_average.toFixed(1)}</p>
                    </Box>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        marginBottom: "30px",
                        fontFamily:
                          "system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
                        fontSize: { xs: "25px", md: "50px" },
                        lineHeight: { xs: "24px", md: "48px" },
                      }}
                    >
                      {data.title}
                    </Typography>
                    <div style={{ marginBottom: "15px" }}>
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "#ea5f5f",
                        }}
                      >
                        Про фільм:{" "}
                      </p>{" "}
                      {data.overview}
                    </div>

                    <div>
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "#ea5f5f",
                        }}
                      >
                        Жанр:
                      </p>
                      <List sx={{ display: "flex" }}>
                        {data.genres &&
                          data.genres.map((genre, index) => {
                            return (
                              <li key={genre.name}>
                                {genre.name}
                                {data.genres.length !== index + 1 ? (
                                  <span style={{ margin: "0 10px" }}>|</span>
                                ) : (
                                  " "
                                )}
                              </li>
                            );
                          })}
                      </List>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "#ea5f5f",
                        }}
                      >
                        Виробництво:
                      </p>
                      <List sx={{ display: "flex" }}>
                        {data.production_companies.map((company, index) => (
                          <li key={company.name}>
                            {company.name}
                            {data.production_companies.length !== index + 1 ? (
                              <span style={{ margin: "0 10px" }}>|</span>
                            ) : (
                              " "
                            )}
                          </li>
                        ))}
                      </List>
                    </div>
                  </Box>
                  <Box sx={{ display: "flex", gap: "20px", mt: "20px" }}>
                    <StyledLink to="trailer">
                      <Button
                        variant="outlined"
                        sx={{
                          color: "#ffffff",
                          borderColor: "#ffffff",
                          borderRadius: "10px",
                          "&:hover": {
                            color: "#ea5f5f",
                            borderColor: "#ea5f5f",
                          },
                        }}
                      >
                        Трейлер
                      </Button>
                    </StyledLink>

                    <StyledLink to="cast">
                      <Button
                        variant="outlined"
                        sx={{
                          color: "#ffffff",
                          borderColor: "#ffffff",
                          borderRadius: "10px",
                          "&:hover": {
                            color: "#ea5f5f",
                            borderColor: "#ea5f5f",
                          },
                        }}
                      >
                        Акторський склад
                      </Button>
                    </StyledLink>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <NotFound />
          )}

          <div>
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;

// const [filmDetails, setFilmDetails] = useState(null);
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState(false);

// useEffect(() => {
//   const fetchDetails = async () => {
//     try {
//       setIsLoading(true);
//       const film = await api.getMoviesDetails(movieId);
//       setFilmDetails(film);
//       setIsLoading(false);
//     } catch (error) {
//       setError(true);
//       setIsLoading(false);
//       console.log(error);
//     }
//   };
//   fetchDetails();
// }, [movieId]);

// if (!filmDetails) return null;

// <ul>
//   {imgData.backdrops &&
//     imgData.backdrops.map((data) => (
//       <img
//         id={data.id}
//         src={`https://image.tmdb.org/t/p/w1280${data.file_path}`}
//         alt={data.file_path}
//         loading="lazy"
//       />
//     ))}
// </ul>
