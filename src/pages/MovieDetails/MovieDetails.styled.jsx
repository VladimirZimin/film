import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #808191;

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #ea5f5f;
  }
`;
