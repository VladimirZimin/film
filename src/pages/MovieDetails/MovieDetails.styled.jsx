import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

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

export const BackdropWrapper = styled.div`
  position: absolute;
  inset: 0px;
  z-index: -1;
  overflow: hidden;
`;

const backdrop = keyframes`

from {
  opacity: 0;
  transform: scale(1.1);
}

to {
  opacity: 1;
  transform: scale(1);
}
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0px;
  animation: ${backdrop} 4s cubic-bezier(0.77, 0, 0.18, 1) 0s 1 normal forwards
    running;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  padding: 0;
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  border: none;
`;
