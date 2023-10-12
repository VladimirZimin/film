import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "components/NotFound/NotFound";
import { useGetMoviesCreditsQuery } from "redux/movies/moviesApi";
import Loader from "components/Loader/Loader";
import useResize from "hooks/useResize";
import { IconButton, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const Cast = () => {
  const [screenSize, setScreenSize] = useState(null);
  const [castIdx, setCastIdx] = useState([]);
  const [nextBtn, setNextBtn] = useState(false);
  const [prevBtn, setPrevBtn] = useState(true);
  const { movieId } = useParams();
  const size = useResize();

  const { data: films, isLoading } = useGetMoviesCreditsQuery(movieId);

  useEffect(() => {
    setScreenSize(size[0]);
  }, [size]);

  useEffect(() => {
    if (screenSize >= 1515) {
      setCastIdx([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    } else if (screenSize <= 1515 && screenSize >= 1400) {
      setCastIdx([0, 1, 2, 3, 4, 5, 6, 7]);
    } else if (screenSize <= 1400 && screenSize >= 1250) {
      setCastIdx([0, 1, 2, 3, 4, 5, 6]);
    } else if (screenSize <= 1250 && screenSize >= 920) {
      setCastIdx([0, 1, 2, 3, 4]);
    } else if (screenSize <= 920 && screenSize >= 770) {
      setCastIdx([0, 1, 2, 3]);
    } else if (screenSize <= 770 && screenSize >= 600) {
      setCastIdx([0, 1, 2]);
    } else if (screenSize <= 600 && screenSize >= 450) {
      setCastIdx([0, 1]);
    } else if (screenSize <= 450) {
      setCastIdx([0]);
    }
  }, [screenSize]);

  const handleNextCast = () => {
    setNextBtn(films.cast.length - 2 === castIdx[castIdx.length - 1] && true);
    setCastIdx(castIdx.map((idx) => idx + 1));
    setPrevBtn(false);
  };

  const handlePrevCast = () => {
    setPrevBtn(1 === castIdx[0] && true);
    setCastIdx(castIdx.map((idx) => idx - 1));
    setNextBtn(false);
  };

  if (!films) return null;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
            marginBottom: "45px",
            width: "100%",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ mr: "10px" }}
          >
            <IconButton
              aria-label="prev"
              size="large"
              type="button"
              onClick={handlePrevCast}
              disabled={prevBtn}
              sx={{
                color: "rgb(255 255 255 / 50%)",
                border: "1px solid #ea5f5f10",
              }}
            >
              <NavigateBeforeIcon fontSize="large" />
            </IconButton>
          </Stack>

          {castIdx.map((idx) => (
            <div
              key={films.cast[idx]?.id}
              style={{
                width: "150px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {films.cast[idx]?.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${films.cast[idx].profile_path}`}
                  alt={films.cast[idx]?.name}
                />
              ) : (
                <>
                  <NotFound />
                </>
              )}
              <p>Ім'я актора: {films.cast[idx]?.name}</p>
              <p>Ім'я персонажа: {films.cast[idx]?.character}</p>
            </div>
          ))}

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ ml: "10px" }}
          >
            <IconButton
              aria-label="next"
              size="large"
              type="button"
              onClick={handleNextCast}
              disabled={nextBtn}
              sx={{
                color: "rgb(255 255 255 / 50%)",
                border: "1px solid #ea5f5f10",
              }}
            >
              <NavigateNextIcon fontSize="large" />
            </IconButton>
          </Stack>
        </div>
      )}
    </div>
  );
};

export default Cast;

// const [films, setFilms] = useState(null);
// const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//   const fetcCost = async () => {
//     try {
//       setIsLoading(true);
//       const cast = await api.getMoviesCredits(movieId);
//       setFilms(cast.cast);
//       setIsLoading(false);
//     } catch (error) {
//       setIsLoading(false);
//       console.log(error);
//     }
//   };
//   fetcCost();
// }, [movieId]);
