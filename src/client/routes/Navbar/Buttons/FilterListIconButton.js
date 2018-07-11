import * as React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';

const FilterListIconButton = () => {
  return (
    <Tooltip title="Filter cards">
        <IconButton color="inherit" aria-label="Filter cards">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
  );
};

export default FilterListIconButton;
