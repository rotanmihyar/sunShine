import Box from "@mui/material/Box";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Link from "@material-ui/core/Link";
import { ReactElement } from "react";
import { DisplayItemTypes } from "./DataTypes";

type SchmetizedItemProp = { value: string; type: DisplayItemTypes };

export default function SchmetizedItem(
  props: SchmetizedItemProp
): ReactElement {
  switch (props.type) {
    case DisplayItemTypes.Image:
      return (
        <Box
          component="img"
          sx={{ maxHeight: 30, maxWidth: 30 }}
          alt="IMG"
          src={props.value}
        />
      );
    case DisplayItemTypes.Date:
      return <>{new Date(props.value).toString()}</>;
    case DisplayItemTypes.Boolean:
      return <Checkbox checked={JSON.parse(props.value)} />;
      case DisplayItemTypes.link:
      return <Link  href={props.value} target="_blank" >Open Link</Link>;
    case DisplayItemTypes.Select:
      return (
        <Select
          disabled
          value={props.value}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem selected value={props.value}>
            {props.value}
          </MenuItem>
        </Select>
      );
    default:
      return <>{props.value}</>;
  }
}
