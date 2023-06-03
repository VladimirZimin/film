import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { GlobalStyle } from "./GlobalStyle";
import Layout from "components/Layout/Layout";
// import Home from "pages/Home/Home";
// import Movies from "pages/Movies/Movies";
// import MovieDetails from "pages/MovieDetails/MovieDetails";
// import Cast from "components/Cast/Cast";
// import Reviews from "components/Reviews/Reviews";
import NotFound from "pages/NotFound/NotFound";

const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
