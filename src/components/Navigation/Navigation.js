import React from "react";
import { Item, StyledLink, Title } from "./Navigation.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserId } from "redux/selectors";
import AuthMenu from "components/AuthMenu/AuthMenu";
import UserMenu from "components/UserMenu/UserMenu";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserId);

  return (
    <>
      <Item>
        <Title>{user.username}</Title>
      </Item>
      <Item>
        <StyledLink to="/">Головна</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/movies">Фільми</StyledLink>
      </Item>
      {!isLoggedIn && <AuthMenu />}
      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;
