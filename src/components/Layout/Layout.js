import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Item, List, StyledLink } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <header>
        <List>
          <Item>
            <StyledLink to="/">Головна</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/movies">Фільми</StyledLink>
          </Item>
        </List>
      </header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
