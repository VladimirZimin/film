import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { GlobalStyle } from "./style/GlobalStyle";
import Layout from "components/Layout/Layout";
import NotFound from "pages/NotFound/NotFound";
import Favorites from "components/Favorites/Favorites";
import BurgerStyle from "style/BurgerStyle";
import UserDetails from "pages/UserDetails/UserDetails";
import WatchList from "components/WatchList/WatchList";
import { PrivateRoute } from "components/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "components/RestrictedRoute/RestrictedRoute";

const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Signup = lazy(() => import("pages/Signup/Signup"));
const Trailer = lazy(() => import("components/Trailer/Trailer"));
const Cast = lazy(() => import("components/Cast/Cast"));

function App() {
  return (
    <>
      <GlobalStyle />
      <BurgerStyle />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="trailer" element={<Trailer />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="/user/:userId" element={<UserDetails />}>
            <Route
              path="favorites"
              element={
                <PrivateRoute component={<Favorites />} redirectTo="/signup" />
              }
            />
            <Route
              path="watchlist"
              element={
                <PrivateRoute component={<WatchList />} redirectTo="/signup" />
              }
            />
          </Route>
          <Route
            path="/signup"
            element={<RestrictedRoute redirectTo="/" component={<Signup />} />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <ToastContainer position="bottom-center" autoClose={3000} />
    </>
  );
}

export default App;
