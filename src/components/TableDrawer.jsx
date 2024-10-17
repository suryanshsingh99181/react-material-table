import React, { useContext } from "react";
import {
  Drawer,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { TableContext } from "../context/TableContext";

const TableDrawer = () => {
  const {
    drawerOpen,
    setDrawerOpen,
    activeFeature,
    columnVisibility,
    toggleColumnVisibility,
    sortByColumn,
    setSortByColumn,
    groupByColumn,
    setGroupByColumn,
    applyGrouping,
    clearGrouping,
  } = useContext(TableContext);

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <Box width={250} padding={2}>
        {activeFeature === "visibility" && (
          <>
            <Typography variant="h6">Column Visibility</Typography>
            <FormGroup>
              {Object.keys(columnVisibility).map((column) => (
                <FormControlLabel
                  key={column}
                  control={
                    <Checkbox
                      checked={columnVisibility[column]}
                      onChange={() => toggleColumnVisibility(column)}
                    />
                  }
                  label={column}
                />
              ))}
            </FormGroup>
          </>
        )}

        {/* Sorting */}
        {activeFeature === "sorting" && (
          <>
            <Typography variant="h6">Sorting Options</Typography>
            <FormControl fullWidth>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortByColumn}
                onChange={(e) => setSortByColumn(e.target.value)}
              >
                <MenuItem value="id">ID</MenuItem>
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="price">Price</MenuItem>
              </Select>
            </FormControl>
          </>
        )}

        {/* Grouping*/}
        {activeFeature === "grouping" && (
          <>
            <Typography variant="h6">Create Groups</Typography>
            <FormControl fullWidth>
              <InputLabel>Select a column</InputLabel>
              <Select
                value={groupByColumn}
                onChange={(e) => setGroupByColumn(e.target.value)}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="category">Category</MenuItem>
                <MenuItem value="subcategory">Subcategory</MenuItem>
              </Select>
            </FormControl>
            <Box marginTop={2}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={applyGrouping}
              >
                Apply grouping
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                onClick={clearGrouping}
                style={{ marginTop: "10px" }}
              >
                Clear Grouping
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default TableDrawer;
