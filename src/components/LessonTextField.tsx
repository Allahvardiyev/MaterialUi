import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

const LessonTextField = () => {
    const [value,setValue] = useState('')
  return (
    <Stack direction="row" spacing={4}>
      <TextField label="Ad" />
      <TextField variant="outlined" label="Ad" />
      <TextField variant="filled" label="Ad" />
      <TextField variant="standard" label="Ad" />
      <TextField variant="outlined" label="Ad" size="small" color="error" />
      <TextField
        variant="outlined"
        label="Ad"
        helperText="Lutfen adiniz daxil edin"
      />
      <TextField
        type="password"
        variant="outlined"
        label="Ad"
        helperText="Lutfen adiniz daxil edin"
      />
      <TextField
        disabled
        type="password"
        variant="outlined"
        label="Ad"
        helperText="Lutfen adiniz daxil edin"
      />
      <TextField
        inputProps={{ readOnly: true }}
        type="password"
        variant="outlined"
        label="Ad"
        helperText="Lutfen adiniz daxil edin"
      />
      <TextField
        inputProps={{
          startAdornment: <InputAdornment position="start">TL</InputAdornment>,
        }}
        variant="outlined"
        label="Toplam"
      />
      <TextField
        inputProps={{
          endAdornment: <InputAdornment position="end">TL</InputAdornment>,
        }}
        variant="outlined"
        label="Toplam"
      />
      <Stack direction='row'>
      <TextField 
      onChange={(e)=>setValue(e.target.value)}
      value={value}
        type='password'
        variant='outlined' 
        label='Şifrə' 
        helperText={!value ? "Lutfen şifrenizi daxil edin" : "Şifrenizi hec kim ile paylaşmiyasiniz"}/>
      </Stack>
    </Stack>
  );
};

export default LessonTextField;
