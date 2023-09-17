import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "services/apiConst";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers, { getState }) => {
      const { token = "" } = getState().auth;
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    addFavorite: builder.mutation({
      query: (credentials) => ({
        url: `/account/${credentials.id}/favorite?api_key=${API_KEY}&session_id=${credentials.sessionId}`,
        method: "POST",
        body: credentials.favorite,
      }),
      providesTags: ["Movies"],
    }),

    addWatchlist: builder.mutation({
      query: (credentials) => ({
        url: `/account/${credentials.id}/watchlist?api_key=${API_KEY}&session_id=${credentials.sessionId}`,
        method: "POST",
        body: credentials.watchlist,
      }),
      providesTags: ["Movies"],
    }),

    getFavorite: builder.query({
      query: (credentials) => ({
        url: `/account/${credentials.id}/favorite/movies?api_key=${API_KEY}&session_id=${credentials.sessionId}&page=${credentials.page}&language=uk-UA`,
      }),
      providesTags: ["Movies"],
    }),

    getWatchlist: builder.query({
      query: (credentials) => ({
        url: `/account/${credentials.id}/watchlist/movies?api_key=${API_KEY}&session_id=${credentials.sessionId}&page=${credentials.page}&language=uk-UA`,
      }),
      providesTags: ["Movies"],
    }),

    getTrendingMovieDay: builder.query({
      query: (page) => ({
        url: `/trending/movie/day?api_key=${API_KEY}&page=${page}&language=uk-UA`,
      }),
      providesTags: ["Movies"],
    }),

    getSearchMovies: builder.query({
      query: (query) => ({
        url: `/search/movie?api_key=${API_KEY}&page=1&language=uk-UA&query=${query}&include_adult=false`,
      }),
      providesTags: ["Movies"],
    }),

    getMoviesDetails: builder.query({
      query: (id) => ({
        url: `/movie/${id}?api_key=${API_KEY}&language=uk-UA`,
      }),
      providesTags: ["Movies"],
    }),

    getMoviesImgDetails: builder.query({
      query: (id) => ({
        url: `/movie/${id}/images?api_key=${API_KEY}`,
      }),
      providesTags: ["Movies"],
    }),

    getMoviesCredits: builder.query({
      query: (id) => ({
        url: `/movie/${id}/credits?api_key=${API_KEY}&language=uk-UA`,
      }),
      providesTags: ["Movies"],
    }),

    getMoviesReviews: builder.query({
      query: (id) => ({
        url: `/movie/${id}/reviews?api_key=${API_KEY}`,
      }),
      providesTags: ["Movies"],
    }),

    fetchGenreMovie: builder.query({
      query: () => ({
        url: `/genre/movie/list?api_key=${API_KEY}&language=uk-UA`,
      }),
      providesTags: ["Movies"],
    }),

    getMovieTrailer: builder.query({
      query: (movieID) => ({
        url: `/movie/${movieID}/videos?api_key=${API_KEY}&language=uk-UA`,
      }),
      providesTags: ["Movies"],
    }),
  }),
});

export const {
  useAddFavoriteMutation,
  useAddWatchlistMutation,
  useGetFavoriteQuery,
  useGetWatchlistQuery,
  useGetMovieTrailerQuery,
  useFetchGenreMovieQuery,
  useGetMoviesCreditsQuery,
  useGetMoviesDetailsQuery,
  useGetMoviesReviewsQuery,
  useGetSearchMoviesQuery,
  useGetTrendingMovieDayQuery,
  useGetMoviesImgDetailsQuery,
} = moviesApi;
