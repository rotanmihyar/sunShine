import { useMemo } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Data from "./db.json";

interface Data { 
  id: number;

}
function App() {
  const columns = useMemo(
    () => [
        { Header: "ID", accessor: "id" },
        { Header: "First name", accessor: "first_name" }   
    ],
    []
   );
  return (
    <div className="App">
      <Card>
        <DataTable
          title="SunShine"
          columns={columns}
          data={Data}
          sortIcon={<SortIcon />}
          pagination
          selectableRows
        />
      </Card>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
