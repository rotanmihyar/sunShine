import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { ItemStrucutreList } from "./DataTypes";
import SchematizedItem from "./SchematizedItem";

type DisplayGridProps<T> = { data: T[]; schema: ItemStrucutreList<T> };
export default function DisplayGrid<T>(props: DisplayGridProps<T>) {
  return (
    <Grid container spacing={2}>
      {props.data.map((row) => (
        <Grid xs={3} spacing={3} className="GridStyle">
          {props.schema.map((cell) => (
            <Grid item xs={12}>
              <Typography variant="h6">{cell.title}</Typography>
              <SchematizedItem
                value={String(row[cell.key])}
                type={cell.type}
              />
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
}
