import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { Wrap } from "./Loader.styled";

const Loader = () => {
  return (
    <Wrap>
      <h2>Завантаження...</h2>
      <RotatingLines
        strokeColor="#ea5f5f"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Wrap>
  );
};

export default Loader;
