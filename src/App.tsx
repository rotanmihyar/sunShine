import "./App.css";
import TableGrid from "./TableGridSwitch";
import Header from "./SunShineHeader";
import { BackendDataRecord } from "./DataTypes";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { FetchFoodData } from "./BackendRequests";
import { foodDataFullSchema, ImageLinkSchema } from "./Schemas";

export function App() {
  const [foodData, setFoodData] = useState<BackendDataRecord[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setFoodData(await FetchFoodData());
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Paper
       className="PaperStyle"
      >
        
        <TableGrid schema={foodDataFullSchema} data={foodData} />
        <TableGrid schema={ImageLinkSchema} data={foodData} />
      </Paper>
    </div>
  );
}

export default App;
