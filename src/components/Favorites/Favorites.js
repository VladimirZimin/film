import { Grid } from "@mui/material";
import { Box, Card, ImageListItem, ImageListItemBar } from "@mui/material";
import Loader from "components/Loader/Loader";
import NotFound from "components/NotFound/NotFound";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { useGetFavoriteQuery } from "redux/movies/moviesApi";
import { selectSessionId } from "redux/selectors";
import { imgUrl } from "services/apiConst";
import { Wrapper } from "./Favorites.styled";
import Paginations from "components/Paginations/Paginations";

const Favorites = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();

  const { userId } = useParams();
  const sessionId = useSelector(selectSessionId);

  const fetchData = {
    sessionId: sessionId,
    id: userId,
    page: 1,
  };

  const { data, isLoading, isError, refetch } = useGetFavoriteQuery(fetchData);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleTotalPage = () =>
    data.total_pages >= 500 ? 500 : data.total_pages;

  return (
    <Wrapper>
      {isLoading && !isError ? (
        <Loader />
      ) : (
        <>
          <Box
            sx={{
              mx: { xs: 5, md: 10, lg: 20 },
            }}
          >
            <Grid container spacing={2}>
              {data.results.map((film) => {
                return (
                  <Grid
                    xl={2.4}
                    lg={3}
                    md={3}
                    sm={4}
                    xs={12}
                    item={true}
                    key={film.id}
                  >
                    <Card
                      sx={{ backgroundColor: "#252936", borderRadius: "8px" }}
                    >
                      <Link
                        to={`/movies/${film.id}`}
                        state={{ from: location }}
                      >
                        {film.poster_path ? (
                          <ImageListItem>
                            <img
                              id={film.id}
                              src={`${imgUrl}${film.poster_path}`}
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
          </Box>

          <Paginations
            data={data}
            page={page}
            handleChange={handleChange}
            handleTotalPage={handleTotalPage}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Favorites;
