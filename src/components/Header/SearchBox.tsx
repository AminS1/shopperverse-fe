import React from "react";
import classes from "./SearchBox.module.scss";
import { Input, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <div className={classes.searchBoxContainer}>
      <div className={classes.searchBox}>
        <div className={classes.categorySelect}>
          <Select className={classes.select} defaultValue="all">
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="products">Products</MenuItem>
          </Select>
        </div>
        <div className={classes.searchInputContainer}>
          <Input
            type="text"
            className={classes.searchInput}
            placeholder="Search ShopperVerse"
            sx={{
              border: "none",
              outline: "none",
              "&:before": {
                borderBottom: "none",
              },
              "&:after": {
                borderBottom: "none",
              },
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottom: "none",
              },
            }}
          />
        </div>
        <div className={classes.searchIconContainer}>
          <SearchIcon className={classes.searchIcon} />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
