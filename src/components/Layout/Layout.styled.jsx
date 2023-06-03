import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  padding: 20px 15px;
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
