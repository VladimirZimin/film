import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import {
  useGetMoviesDetailsQuery,
  useGetMoviesImgDetailsQuery,
  useGetTrendingMovieDayQuery,
} from "redux/movies/moviesApi";

import { imgUrlLarge } from "services/apiConst";
import { Backdrop, BackdropWrapper, Image } from "./TopMovie.styled";

const TopMovie = () => {
  const [movieId, setMovieId] = useState(null);

  const { data: movie } = useGetTrendingMovieDayQuery(1);
  console.log("movie:", movie);
  const { data: dataImg } = useGetMoviesImgDetailsQuery(movieId);
  console.log("dataImg:", dataImg);
  const { data: movieDetails } = useGetMoviesDetailsQuery(movieId);
  console.log("movieDetails:", movieDetails);

  useEffect(() => {
    movie && setMovieId(movie.results[0].id);
  }, [movie]);

  return (
    <Box>
      <Box sx={{ height: "80vh" }}></Box>
      {dataImg && (
        <BackdropWrapper>
          <Backdrop>
            <Image
              id={dataImg.id}
              src={`${imgUrlLarge}${dataImg.backdrops[1]?.file_path}`}
              alt={movie.results[0].title}
              loading="lazy"
            />
          </Backdrop>
        </BackdropWrapper>
      )}
      <div
        style={{
          position: "absolute",
          background: `linear-gradient(0deg, rgb(31, 29, 43) 10%, rgba(21, 21, 21, 0.5) 150%)`,
          inset: "0px",
          zIndex: -1,
        }}
      >
        <Grid container>
          <Grid xs={4} sx={{ m: "150px", color: "#ffffff" }}>
            {movieDetails && (
              <>
                <h1 style={{ fontSize: "52px" }}>{movieDetails.title}</h1>
                <h2 style={{ fontSize: "22px" }}>{movieDetails.tagline}</h2>
                <p style={{ fontSize: "" }}>
                  Рейтинг: {movieDetails.vote_average.toFixed(1)}
                </p>
                <p style={{ fontSize: "16px" }}>{movieDetails.overview}</p>
              </>
            )}
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default TopMovie;
