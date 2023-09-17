import React from "react";
import { HeartButton, LinkStyle } from "./Logo.styled";

const Logo = () => {
  return (
    <>
      <LinkStyle to="/">
        i <HeartButton /> <br />
        film
      </LinkStyle>
    </>
  );
};

export default Logo;
