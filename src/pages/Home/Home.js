import { useGetTrendingMovieDayQuery } from "redux/movies/moviesApi";
import CardList from "components/CardList/CardList";

const Home = () => {
  return (
    <>
      <CardList useGetTrendingMovieDayQuery={useGetTrendingMovieDayQuery} />;
    </>
  );
};

export default Home;

// const [totalPages, setTotalPages] = useState(1);
// const [films, setFilms] = useState([]);
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState(false);

// useEffect(() => {
//   const fetchMovies = async () => {
//     try {
//       setIsLoading(true);
//       const films = await api.getTrendingMovieDay(page);
//       setTotalPages(films.total_pages);
//       setFilms(films.results);
//       setIsLoading(false);
//     } catch (error) {
//       setError(true);
//       setIsLoading(false);
//       console.log(error);
//     }
//   };
//   fetchMovies();
// }, [page]);
