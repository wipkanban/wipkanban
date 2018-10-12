import * as React from "react";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const Search = () => {
  return (
    <Tooltip title="Search cards">
      <IconButton color="inherit" aria-label="Search cards">
        <SearchIcon />
      </IconButton>
    </Tooltip>
  );
};

export default Search;
