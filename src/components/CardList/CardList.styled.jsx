import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 80px;
`;

export const CardLink = styled(Link)`
  &:hover img {
    transform: scale(1.1);
    transition: 1s;
  }

  & img {
    transition: 0.5s;
  }
`;
