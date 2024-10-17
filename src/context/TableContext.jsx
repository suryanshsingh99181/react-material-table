import React, { createContext, useState, useMemo } from "react";
import TABLEDATA from "../tableData.json";

export const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [groupByColumn, setGroupByColumn] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({
    id: true,
    name: true,
    category: true,
    subcategory: true,
    createdAt: true,
    updatedAt: true,
    price: true,
    sale_price: true,
  });
  const [sortByColumn, setSortByColumn] = useState("id");

  // Filter data
  const filteredData = useMemo(() => {
    if (!searchTerm) return TABLEDATA;
    return TABLEDATA.filter((row) =>
      Object.values(row).some((val) =>
        val
          ? val.toString().toLowerCase().includes(searchTerm.toLowerCase())
          : false
      )
    );
  }, [searchTerm]);

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "category", header: "Category" },
      { accessorKey: "subcategory", header: "Subcategory" },
      { accessorKey: "createdAt", header: "Created At" },
      { accessorKey: "updatedAt", header: "Updated At" },
      { accessorKey: "price", header: "Price" },
      { accessorKey: "sale_price", header: "Sale Price" },
    ],
    []
  );

  const handleFeatureClick = (feature) => {
    setActiveFeature(feature);
    setDrawerOpen(true);
  };

  const toggleColumnVisibility = (column) => {
    setColumnVisibility((prevState) => ({
      ...prevState,
      [column]: !prevState[column],
    }));
  };

  const applyGrouping = () => {
    setDrawerOpen(false);
  };

  const clearGrouping = () => {
    setGroupByColumn("");
  };

  return (
    <TableContext.Provider
      value={{
        drawerOpen,
        setDrawerOpen,
        activeFeature,
        handleFeatureClick,
        searchTerm,
        setSearchTerm,
        groupByColumn,
        setGroupByColumn,
        columnVisibility,
        toggleColumnVisibility,
        sortByColumn,
        setSortByColumn,
        filteredData,
        columns,
        applyGrouping,
        clearGrouping,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
