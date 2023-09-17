import { Pagination, Stack } from "@mui/material";
import { ButtonWrap } from "./Paginations.styled";

const Paginations = ({ data, page, handleChange, handleTotalPage }) => {
  return (
    <ButtonWrap>
      <Stack spacing={1}>
        <Pagination
          count={handleTotalPage()}
          page={page}
          onChange={handleChange}
          sx={{
            ".MuiButtonBase-root": {
              color: "#808191",
            },
            ".MuiPaginationItem-root": {
              color: "#808191",
            },

            ".Mui-selected": {
              fontWeight: "600",
              color: "#ea5f5f",
              backgroundColor: "#75757550",
            },
          }}
        />
      </Stack>
    </ButtonWrap>
  );
};

export default Paginations;
