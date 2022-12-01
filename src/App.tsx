import "./App.css";
import BasicTable from "./DisplayTable";
import DisplayLayoutSwitch from "./DisplayLayoutSwitch";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <DisplayLayoutSwitch /> 
      <BasicTable />
    </div>
  );
}

export default App;
