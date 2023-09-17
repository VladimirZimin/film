import React from "react";
import { Wrapper } from "./NotFound.styled";
import notFoundImg from "../../assets/img/image-not-found2.png";

const NotFound = () => {
  return <img src={notFoundImg} alt="Зображення не знайдено" />;
};

export default NotFound;
