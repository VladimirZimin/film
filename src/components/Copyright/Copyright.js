import { Link, Typography } from "@mui/material";
import { styled } from "styled-components";

const LinkStyle = styled(Link)`
  &:hover {
    color: #ea5f5f;
  }
`;

export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      // color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <LinkStyle color="inherit" href="https://github.com/VladimirZimin">
        Vladimir Zimin
      </LinkStyle>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
