import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Schema } from "./BackendRequests";
import { BackendDataRecord } from "./DataTypes";
import SchematizedItem from "./SchematizedItem";

type BackendData = { Data: BackendDataRecord[] };
export default function DisplayGrid(rows: BackendData) {
  return (
    <Grid container spacing={2}>
      {rows.Data.map((row) => (
        <Grid xs={3} spacing={3} className="GridStyle">
          {Schema.map((cell) => (
            <Grid item xs={12}>
              <Typography variant="h6">{cell.title}</Typography>
              <SchematizedItem
                value={row[cell.key].toString()}
                type={cell.type}
              />
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
}
