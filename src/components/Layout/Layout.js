import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Logo from "components/Logo/Logo";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { selectSearch } from "redux/selectors";
import { alpha } from "@mui/material";
import SearchForm from "components/SearchForm/SearchForm";
import ProfileMenu from "components/ProfileMenu/ProfileMenu";
import Footer from "components/Footer/Footer";

const Layout = () => {
  const isSearch = useSelector(selectSearch);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: alpha("#000000", 0.7),
          backdropFilter: "blur(4px)",
        }}
      >
        <Container maxWidth="100%">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            <Logo />
            <SearchForm />
            <ProfileMenu />
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        {isSearch && <Navigate to={"/movies"} />}
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
