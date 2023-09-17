import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { RiHeartFill } from "react-icons/ri";

export const LinkStyle = styled(Link)`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;

  &:hover {
    color: #ea5f5f;
  }

  &:hover svg {
    color: #ffffff;
  }
`;

export const HeartButton = styled(RiHeartFill)`
  font-size: 20px;
  vertical-align: bottom;
  color: #ea5f5f;
`;
