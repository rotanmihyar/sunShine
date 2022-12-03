import React, { useState } from "react";
import DisplayTable from "./DisplayTable";
import DisplayGrid from "./DisplayGrid";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,Paper
} from "@mui/material";
import { BackendDataRecord } from "./DataTypes";


export enum TableStyles {
  Table = "Table",
  Grid = "Grid",
}
type BackendData = { Data: BackendDataRecord[]; };
export default function TableGrid(rows:BackendData) {
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
      {DisplayStyle === TableStyles.Table ? <DisplayTable  Data={rows.Data} /> : <Paper sx={{width:"100%", pb: '50px', minHeight: '100vh', maxWidth: 1000, margin: 'auto' }}> <DisplayGrid Data={rows.Data} /></Paper>}
    </FormControl>
  );
}
