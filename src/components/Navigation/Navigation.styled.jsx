import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Item = styled.li`
  padding: 0 15px;
`;

export const Title = styled.h2`
  color: #ea5f5f;
`;

export const StyledLink = styled(NavLink)`
  padding-bottom: 5px;
  text-decoration: none;
  color: #808191;

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #ffffff;
    border-bottom: 1px solid #ea5f5f;
  }
`;
