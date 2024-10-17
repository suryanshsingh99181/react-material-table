import React, { useContext } from "react";
import { TextField, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";
import { TableContext } from "../context/TableContext";

const TableToolbar = () => {
  const { searchTerm, setSearchTerm, handleFeatureClick } =
    useContext(TableContext);

  return (
    <Box display="flex" justifyContent="space-between" marginBottom={2}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
      <Box display="flex">
        {/* for Column Visibility */}
        <IconButton onClick={() => handleFeatureClick("visibility")}>
          <VisibilityIcon />
        </IconButton>
        {/* for Sorting */}
        <IconButton onClick={() => handleFeatureClick("sorting")}>
          <SortIcon />
        </IconButton>
        {/* for Grouping */}
        <IconButton onClick={() => handleFeatureClick("grouping")}>
          <FilterListIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TableToolbar;
