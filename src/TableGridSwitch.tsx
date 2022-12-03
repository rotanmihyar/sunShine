import React, { useState } from "react";
import DisplayTable from "./DisplayTable";
import DisplayGrid from "./DisplayGrid";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
import { BackendDataRecord, ItemStrucutreList } from "./DataTypes";


export enum TableStyles {
  Table = "Table",
  Grid = "Grid",
}
type TableGridProp = { data: BackendDataRecord[],schema:ItemStrucutreList };
export default function TableGrid(props:TableGridProp) {
  const [DisplayStyle, SetDisplayStyle] = useState<TableStyles>(
    TableStyles.Table
  );

  return (
    <FormControl className="RadioButtonsContainer">
      <FormLabel id="demo-radio-buttons-group-label">Change Style</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Table"
        name="radio-buttons-group"
        value={DisplayStyle}
        onChange={(x) => SetDisplayStyle(x.target.value as TableStyles)}
        row
      >
        <FormControlLabel
          value={TableStyles.Table}
          control={<Radio size="medium" />}
          label="Table"
        />
        <FormControlLabel
          value={TableStyles.Grid}
          control={<Radio size="medium" />}
          label="Grid"
        />
      </RadioGroup>
      <span> You've selected: {DisplayStyle}</span>
      <div className="currentValue"></div>
      {DisplayStyle === TableStyles.Table ? <DisplayTable schema={props.schema} data={props.data} /> : <DisplayGrid schema={props.schema} data={props.data} />}
    </FormControl>
  );
}
