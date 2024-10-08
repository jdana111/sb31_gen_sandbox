// Test06 (MUI DataGrid)
// https://mui.com/components/data-grid/
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "MUI X", col2: "is awesome" },
  { id: 3, col1: "Material UI", col2: "is amazing" },
  { id: 4, col1: "MUI", col2: "" },
  { id: 5, col1: "Joy UI", col2: "is awesome" },
  { id: 6, col1: "MUI Base", col2: "is amazing" },
];

const columns: GridColDef[] = [
  { field: "id" },
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
];

export default function Test06() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        columnVisibilityModel={{ id: false }}
      />
    </div>
  );
}
