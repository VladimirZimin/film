import React from "react";
import { Wrapper } from "./NotFound.styled";
import notFoundImg from "../../img/image-not-found.png";

const NotFound = () => {
  return (
    <Wrapper>
      <img src={notFoundImg} alt="Зображення не знайдено" />
    </Wrapper>
  );
};

export default NotFound;
