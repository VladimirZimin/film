import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuery, getSearch } from "redux/movies/moviesSlice";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./SearchForm.styled";
import { selectSearch } from "redux/selectors";
import { IconButton, Stack } from "@mui/material";

const SearchForm = () => {
  const dispatch = useDispatch();
  const isSearch = useSelector(selectSearch);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(getQuery(form.elements.query.value));
    dispatch(getSearch(true));
    form.reset();
  };

  useEffect(() => {
    if (isSearch === true) dispatch(getSearch(false));
  }, [dispatch, isSearch]);

  return (
    <form onSubmit={handleSubmit}>
      <Search>
        <SearchIconWrapper>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0}
            sx={{ cursor: "pointer", zIndex: 99999 }}
          >
            <IconButton type="submit">
              <SearchIcon style={{ color: "#7d7d7d" }} />
            </IconButton>
          </Stack>
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Пошук..."
          inputProps={{ "aria-label": "search" }}
          name="query"
        />
      </Search>
    </form>
  );
};

export default SearchForm;
