import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TableProvider } from "./context/TableContext";
ReactDOM.render(
  <TableProvider>
    <App />
  </TableProvider>,
  document.getElementById("root")
);
