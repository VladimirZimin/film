import { Item, StyledLink } from "components/Navigation/Navigation.styled";
import React from "react";

const AuthMenu = () => {
  return (
    <>
      <Item>
        <StyledLink
          to="/signup"
          style={{ borderBottom: "none", color: "#ea5f5f" }}
        >
          Ввiйти
        </StyledLink>
      </Item>
    </>
  );
};

export default AuthMenu;
