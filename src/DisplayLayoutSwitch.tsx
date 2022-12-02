import React, { useState } from "react";
import DisplayTable from "./DisplayTable";
import DisplayGrid from "./DisplayGrid";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export enum TableStyles {
  Table = "Table",
  Grid = "Grid",
}

function DisplaySwitch() {
  console.log(selectedStyle)
  switch(selectedStyle) {
    case TableStyles.Table:
      return  <DisplayTable />;
    default:
      return <DisplayGrid />;
  }
}
export var selectedStyle: TableStyles=TableStyles.Table;
export default function DisplayLayoutSwitch() {
  const [DisplayOutput, setValue] = useState<TableStyles>(TableStyles.Table);
  selectedStyle = DisplayOutput;
  
  return (
    <FormControl className="RadioButtonsContainer">
      <FormLabel id="demo-radio-buttons-group-label">Change Style</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Table"
        name="radio-buttons-group"
        value={DisplayOutput}
        onChange={(x) => setValue(x.target.value as TableStyles)}
        row
      >
        <FormControlLabel
          value={TableStyles.Table}
          control={<Radio size="medium"  />}
          label="Table"
         
        />
        <FormControlLabel
          value={TableStyles.Grid}
          control={<Radio size="medium" />}
          label="Grid"
        />
      </RadioGroup>
      <span> You've selected:{DisplayOutput}</span>
      <div className="currentValue"></div>
      {DisplaySwitch()}
    </FormControl>
    
  );
}
