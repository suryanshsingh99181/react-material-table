import React from "react";
import { Container } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import { TableContext } from "./context/TableContext"; // Importing the context
import TableToolbar from "./components/TableToolbar"; // Importing the toolbar
import TableDrawer from "./components/TableDrawer"; // Importing the drawer

function App() {
  const { filteredData, columns } = React.useContext(TableContext);

  return (
    <Container>
      <TableToolbar />

      <MaterialReactTable
        columns={columns}
        data={filteredData}
        enableSorting
        enableColumnVisibilityToggle
        enableGrouping
        enableTopToolbar={false}
      />

      <TableDrawer />
    </Container>
  );
}

export default App;
