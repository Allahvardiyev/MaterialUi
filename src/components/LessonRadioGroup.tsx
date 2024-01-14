import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const LessonRadioGroup = () => {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <FormControl>
      <FormLabel>Maaş Beklentiniz</FormLabel>
      <RadioGroup
        row
        name="extected-salary"
        color="secondary"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel
          label="2000$"
          value="2000"
          control={<Radio color="error" />}
        ></FormControlLabel>
        <FormControlLabel
          label="3000$"
          value="3000"
          control={<Radio />}
        ></FormControlLabel>
        <FormControlLabel
          label="4000$"
          value="4000"
          control={<Radio />}
        ></FormControlLabel>
      </RadioGroup>
      <FormHelperText>Yanlis secim</FormHelperText>
    </FormControl>
  );
};

export default LessonRadioGroup;
