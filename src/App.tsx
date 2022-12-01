import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Data from "./db.json";
const columns = [
  {
    First: "Id ",
    selector: "id",
    sortable: true,
  },
  {
    name: "First Name",
    selector: "firstName",
    sortable: false
  }
];

function App() {
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
