import Box from "@mui/material/Box";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { ReactElement } from "react";
import { DataType } from "./DataType";
type SchmetizedItemProp = { value: string; type: DataType };
export default function SchmetizedItem(
  props: SchmetizedItemProp
): ReactElement {
  switch (props.type) {
    case DataType.Image:
      return (
        <Box
          component="img"
          sx={{ maxHeight: 30, maxWidth: 30 }}
          alt="IMG"
          src={props.value}
        />
      );
    case DataType.Date:
      return <>{new Date(props.value).toString()}</>;
    case DataType.Boolean:
      return <Checkbox checked={!!props.value} />;
    case DataType.Select:
      return (
        <Select disabled value={props.value} inputProps={{ "aria-label": "Without label" }}>
          <MenuItem  selected value={props.value}>{props.value}</MenuItem>
        </Select>
      );
    default:
      return <>{props.value}</>;
  }
}
