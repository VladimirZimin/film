import Loader from "components/Loader/Loader";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import NotFound from "components/NotFound/NotFound";
import { Wrapper } from "./Movies.styled";
import { useGetSearchMoviesQuery } from "redux/movies/moviesApi";
import { useSelector } from "react-redux";
import { selectQuery } from "redux/selectors";
import { useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Card, ImageListItem, ImageListItemBar } from "@mui/material";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get("query") ?? "";
  const searchQuery = useSelector(selectQuery);

  useEffect(() => {
    setSearchParams({ query: searchQuery });
  }, [searchQuery, setSearchParams]);

  const { data, isLoading, isError } = useGetSearchMoviesQuery(query);

  return (
    <Wrapper>
      {isLoading && !isError ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={2} sx={{ mx: { xs: 5, md: 10, lg: 20 } }}>
            {data.results.map((film) => {
              return (
                <Grid xl={2} lg={3} md={3} sm={4} xs={12} key={film.id}>
                  <Card
                    sx={{ backgroundColor: "#252936", borderRadius: "8px" }}
                  >
                    <Link to={`${film.id}`} state={{ from: location }}>
                      {film.poster_path ? (
                        <ImageListItem>
                          <img
                            id={film.id}
                            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                            alt={film.title}
                            loading="lazy"
                          />
                          <ImageListItemBar
                            position="below"
                            title={film.title}
                            subtitle={`
                            ${film.title} |
                            ${film.release_date.slice(0, 4)}
                            `}
                            sx={{
                              px: "10px",
                              fontSize: "20px",
                              color: "#ffffff",

                              ".MuiImageListItemBar-subtitle": {
                                color: "#808191",
                              },
                            }}
                          ></ImageListItemBar>
                          <Box
                            component="p"
                            sx={{
                              position: "absolute",
                              top: "7px",
                              right: "7px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "45px",
                              height: "45px",
                              fontSize: "17px",
                              fontWeight: 600,
                              backgroundColor: "#00000080",
                              color: "#ffffff",
                              borderRadius: "50%",
                              border: "3px solid red",
                              borderColor: () => {
                                if (film.vote_average.toFixed(1) >= 7.5) {
                                  return "#1ca240";
                                } else if (
                                  film.vote_average.toFixed(1) <= 7.4 &&
                                  film.vote_average.toFixed(1) >= 6.1
                                ) {
                                  return "#FFFF00";
                                }
                              },
                            }}
                          >
                            <span>{film.vote_average.toFixed(1)}</span>
                          </Box>
                        </ImageListItem>
                      ) : (
                        <NotFound />
                      )}
                    </Link>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Wrapper>
  );
};

export default Movies;

// const [films, setFilms] = useState([]);
// const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//   if (query === "") return;

//   const fetchSearchMovie = async (query) => {
//     try {
//       setIsLoading(true);
//       const film = await api.getSearchMovies(query);
//       setFilms(film.results);
//       setIsLoading(false);
//     } catch (error) {
//       setIsLoading(false);
//       console.log(error);
//     }
//   };
//   fetchSearchMovie(query);
// }, [query]);
