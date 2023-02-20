import React, { useState, useRef, useMemo, useCallback, memo } from "react";
import { AgGridReact } from "ag-grid-react";
import { getUserData } from "../../apiServices/query";
import { useQuery } from "react-query";

const GridComponent = memo(() => {
  const { data } = useQuery("users", getUserData);

  const gridRef = useRef();

  const [columnDefs, setColumnDefs] = useState([
    { field: "name", filter: true },
    { field: "email", filter: true },
    { field: "username", filter: true },
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
    <>
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
        De-select
      </button>
    </>
  );
});

export default GridComponent;
