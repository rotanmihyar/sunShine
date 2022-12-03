import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { BackendDataRecord, ItemStrucutreList } from "./DataTypes";
import SchematizedItem from "./SchematizedItem";

type DisplayGridProps = { data: BackendDataRecord[],schema:ItemStrucutreList };
export default function DisplayGrid(props: DisplayGridProps) {
  return (
    <Grid container spacing={2}>
      {props.data.map((row) => (
        <Grid xs={3} spacing={3} className="GridStyle">
          {props.schema.map((cell) => (
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
