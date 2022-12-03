import "./App.css";
import TableGrid from "./TableGridSwitch";
import Header from "./SunShineHeader";
import { BackendDataRecord } from "./DataTypes";
import { useEffect, useState } from "react";

export function App() {
  const [rows, setRows] = useState<BackendDataRecord[]>(
    [] as BackendDataRecord[]
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3000/food");
        const body = await result.json();
        setRows(body);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <TableGrid Data={rows} />
    </div>
  );
}

export default App;
