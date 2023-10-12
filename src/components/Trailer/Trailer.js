import { Box } from "@mui/material";
import Loader from "components/Loader/Loader";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useGetMovieTrailerQuery } from "redux/movies/moviesApi";

const Trailer = () => {
  const { movieId } = useParams();
  const iframeRef = useRef(null);

  const {
    data: trailers,
    isLoading,
    isError,
  } = useGetMovieTrailerQuery(movieId);

  return (
    <>
      {!isError && isLoading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            display: "flex",
            // flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            // alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
            mt: "20px",
            mb: "45px",
          }}
        >
          {trailers.results.length === 0 ? (
            <p style={{ fontSize: "20px" }}>Трейлер не знайдено</p>
          ) : (
            trailers.results.map((trailer) => (
              <Box
                key={trailer.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "700px",
                  height: "350px",
                  mb: "25px",
                }}
              >
                <div>
                  <h2
                    style={{
                      textAlign: "center",
                      marginBottom: "10px",
                      color: "#ffffff",
                    }}
                  >
                    {trailer.name}
                  </h2>
                </div>
                <iframe
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  ref={iframeRef}
                  width="100%"
                  height="100%"
                  title="video"
                ></iframe>
              </Box>
            ))
          )}
        </Box>
      )}
    </>
  );
};

export default Trailer;

// const [isLoading, setIsLoading] = useState(false);
// const [items, setItems] = useState([]);
// const [error, setError] = useState(false);

// useEffect(() => {
//   const getTrailer = async () => {
//     try {
//       setIsLoading(true);
//       const data = await api.getMovieTrailer(movieId);
//       setItems(data.results);
//       setIsLoading(false);
//     } catch (error) {
//       setError(true);
//       setIsLoading(false);
//       console.log(error);
//     }
//   };

//   getTrailer();
// }, [movieId]);
