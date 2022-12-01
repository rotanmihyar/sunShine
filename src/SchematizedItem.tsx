import Box from "@mui/material/Box";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { ReactElement } from "react";
import { ItemType } from "./ItemType";
type SchmetizedItemProp = { value: string; type: ItemType };
export default function SchmetizedItem(
  props: SchmetizedItemProp
): ReactElement {
  switch (props.type) {
    case ItemType.Image:
      return (
        <Box
          component="img"
          sx={{ maxHeight: 30, maxWidth: 30 }}
          alt="IMG"
          src={props.value}
        />
      );
    case ItemType.Date:
      return <>{new Date(props.value).toString()}</>;
    case ItemType.Boolean:
      return <Checkbox checked={!!props.value} />;
    case ItemType.Select:
      return (
        <Select disabled value={props.value} inputProps={{ "aria-label": "Without label" }}>
          <MenuItem  selected value={props.value}>{props.value}</MenuItem>
        </Select>
      );
    default:
      return <>{props.value}</>;
  }
}
