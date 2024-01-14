import {
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
  import React from "react";
  import { useState } from "react";

const LessonRadioExample = () => {
    const [value, setValue] = useState('')
    const [helperText, setHelperText] = useState('')
    const [error, setError] = useState(false)
    const handleRadioChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setValue(event.target.value)
    }
    const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if(value=="Elmir"){
            setHelperText("Tabiki dogru cavab Elmir!")
            setError(false)
        }
        else if(value=="ofCourseElmir"){
        setHelperText("Bravo dogru cavab")
        setError(false)
        }
        else{
           setHelperText('Lutfen secim yapiniz')
           setError(true)
        }
    }
  return (
<form onSubmit={handleSubmit}>
    <FormControl error={error}>
        <FormLabel>En kapsamli front end egitimi veren kim?</FormLabel>
        <RadioGroup onChange={handleRadioChange}>
            <FormControlLabel value="Elmir" label="Elmir" control={<Radio/>}/>
            <FormControlLabel value="ofCourseElmir" label="Tabiki de Elmir" control={<Radio/>}/>
      </RadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">Gonder</Button>
    </FormControl>
</form>
  )
}

export default LessonRadioExample