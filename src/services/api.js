import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "060719e53fa713f801520e62e92850bd";
// const PER_PAGE = 12;

const getTrendingMovieDay = async (page) => {
  try {
    const response = await axios.get(
      `/trending/movie/day?api_key=${API_KEY}&page=${page}&language=uk-UA`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getSearchMovies = async (query, page) => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&page=1&language=uk-UA&query=${query}&include_adult=true`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getMoviesDetails = async (id) => {
  try {
    const response = await axios.get(
      `/movie/${id}?api_key=${API_KEY}&&language=uk-UA`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getMoviesCredits = async (id) => {
  try {
    const response = await axios.get(
      `/movie/${id}/credits?api_key=${API_KEY}&&language=uk-UA`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getMoviesReviews = async (id) => {
  try {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);

    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

const fetchGenreMovie = async () => {
  const response = await axios.get(
    `/genre/movie/list?api_key=${API_KEY}&language=uk-UA`
  );

  return response.data.genres;
};

const fetchTrailersOfMovie = async (id) => {
  try {
    const responce = await axios.get(
      `https://imdb-api.com/en/API/Trailer/k_mlq541ll/${id}`
    );

    return responce;
  } catch (error) {
    console.log(error);
  }
};

const api = {
  getTrendingMovieDay,
  getSearchMovies,
  getMoviesDetails,
  getMoviesCredits,
  getMoviesReviews,
  fetchGenreMovie,
  fetchTrailersOfMovie,
};

export default api;
