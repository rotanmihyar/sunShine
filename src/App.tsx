import "./App.css";
import TableGrid from "./TableGridSwitch";
import Header from "./SunShineHeader";
import { BackendDataRecord } from "./DataTypes";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { FetchFoodData } from "./BackendRequests";
import { foodDataFullSchema } from "./Schemas";

export function App() {
  const [foodData, setFoodData] = useState<BackendDataRecord[]>(
    [] as BackendDataRecord[]
  );
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
        sx={{
          width: "100%",
          pb: "50px",
          minHeight: "100vh",
          maxWidth: 1000,
          margin: "auto",
        }}
      >
        {" "}
        <TableGrid schema={foodDataFullSchema} data={foodData} />
      </Paper>
    </div>
  );
}

export default App;
