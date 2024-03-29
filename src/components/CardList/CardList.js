import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { CardLink, Wrapper } from "./CardList.styled";
import Loader from "components/Loader/Loader";
import NotFound from "components/NotFound/NotFound";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Card, ImageListItem, ImageListItemBar } from "@mui/material";

import { imgUrl } from "services/apiConst";
import Paginations from "components/Paginations/Paginations";

const CardList = ({ useGetTrendingMovieDayQuery }) => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const { data, isLoading, isError } = useGetTrendingMovieDayQuery(page);

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
          <Grid container spacing={2} sx={{ mx: { xs: 5, md: 10, lg: 20 } }}>
            {data.results.map((film) => {
              return (
                <Grid xl={2.4} lg={3} md={3} sm={4} xs={12} key={film.id}>
                  <Card
                    sx={{ backgroundColor: "#252936", borderRadius: "8px" }}
                  >
                    <CardLink
                      to={`/movies/${film.id}`}
                      state={{ from: location }}
                    >
                      {film.poster_path ? (
                        <ImageListItem>
                          <div
                            style={{
                              overflow: "hidden",
                            }}
                          >
                            <img
                              id={film.id}
                              src={`${imgUrl}${film.poster_path}`}
                              alt={film.title}
                              loading="lazy"
                            />
                          </div>
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
                    </CardLink>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

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

export default CardList;
