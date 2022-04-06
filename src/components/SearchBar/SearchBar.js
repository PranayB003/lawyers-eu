import React from "react";

import { FilledInput, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AiOutlineSearch } from "react-icons/ai";

const StyledInput = styled((props) => <FilledInput {...props} />)(
  ({ theme }) => ({
    fontSize: theme.typography.subtitle1.fontSize,
    borderRadius: theme.shape.borderRadius,
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "15px",
    "& .MuiFilledInput-input": {
      padding: "0",
    },
  })
);

const SearchBar = ({ value, onChange, searchBarDefaultValue }) => {
  const changeHandler = (event) => {
    onChange(event.target.value);
  };

  return (
    <StyledInput
      disableUnderline
      fullWidth
      placeholder={
        searchBarDefaultValue ? searchBarDefaultValue : "Search for Lawyers"
      }
      endAdornment={
        <InputAdornment position="end">
          <AiOutlineSearch />
        </InputAdornment>
      }
      value={value}
      onChange={changeHandler}
    />
  );
};

export default SearchBar;
