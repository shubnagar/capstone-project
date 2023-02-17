import React, { useState, useRef, useMemo, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getUserData } from "../../apiServices/query";
import { useQuery } from "react-query";

const Teams = () => {
  const gridRef = useRef();
  const { data } = useQuery("users", getUserData);

  const [columnDefs, setColumnDefs] = useState([
    { field: "name", filter: true },
    { field: "email", filter: true },
    { field: "phone" },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  const buttonListener = useCallback((e) => {
    gridRef.current.api.deselectAll();
  }, []);

  return (
    <section className="flexCenter flexDirectionColumn height100Per">
      <div
        className="ag-theme-alpine-dark"
        style={{ minWidth: 620, minHeight: 600 }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="multiple"
          onCellClicked={cellClickedListener}
        />
        <button className="marginTop10 padding5" onClick={buttonListener}>
          Push Me
        </button>
      </div>
    </section>
  );
};

export default Teams;
