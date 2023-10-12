import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: alpha("#353340", 1),
  "&:hover": {
    backgroundColor: alpha("#353340", 0.7),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #7d7d7d;
`;

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "35ch",
      },
    },
    [theme.breakpoints.up("md")]: {
      width: "40ch",
      "&:focus": {
        width: "60ch",
      },
    },
  },
}));
