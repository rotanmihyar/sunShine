/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react'; 
import { FormControl, FormLabel, RadioGroup, FormControlLabel,Radio } from '@mui/material';


function radioButtons() {
  const [value, setValue] = useState<string>("Table");
 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)

  }
  return (
    <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Change Style</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="Table"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
        row
  >
    <FormControlLabel value="Table"  control={<Radio size='medium' />} label="Table" />
    <FormControlLabel value="Grid" control={<Radio size='medium' />} label="Grid" />
      </RadioGroup>
      <span> You've selected:{value}</span>
    <div className="currentValue"></div>
    </FormControl>
   
  );

}export default radioButtons;