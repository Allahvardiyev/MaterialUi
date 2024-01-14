import React from 'react'
import { Box, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';
const LessonSelect = () => {
    const [value, setValue] = useState<string[]>([])
    console.log(value);
    
  return (
    <Box width="200px" >
        {/* <TextField
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        fullWidth 
        select
        label="Ölkə Seçiniz">
            <MenuItem value="AZ">Azerbaycan</MenuItem>
            <MenuItem value="TR">Türkiye</MenuItem>
            <MenuItem value="USA">ABD</MenuItem>
        </TextField> */}

<TextField
        value={value}
        SelectProps={{
         multiple: true,
        }}
        onChange={(e)=>setValue(typeof e.target.value==="string"
         ? e.target.value.split(',') :
         e.target.value)}
        fullWidth 
        select
        label="Ölkə Seçiniz">
            <MenuItem value="AZ">Azerbaycan</MenuItem>
            <MenuItem value="TR">Türkiye</MenuItem>
            <MenuItem value="USA">ABD</MenuItem>
        </TextField>
    </Box>
  )
}

export default LessonSelect