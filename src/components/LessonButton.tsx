import React from "react";
import { Button, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
const LessonButton = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="text" color="primary">Mavi</Button>
        <Button variant="text" color="secondary">Mor</Button>
        <Button variant="text" color="success">Yasil</Button>
        <Button variant="text" color="error">Kirmizi</Button>
        <Button variant="text" color="warning">Sari</Button>
        <Button variant="text" color="info">Acik Mavi</Button>
     
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="primary">Mavi</Button>
        <Button variant="outlined" color="secondary">Mor</Button>
        <Button variant="outlined" color="success">Yasil</Button>
        <Button variant="outlined" color="error">Kirmizi</Button>
        <Button variant="outlined" color="warning">Sari</Button>
        <Button variant="outlined" color="info">Acik Mavi</Button>
     
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">Mavi</Button>
        <Button variant="contained" color="secondary">Mor</Button>
        <Button variant="contained" color="success">Yasil</Button>
        <Button variant="contained" color="error">Kirmizi</Button>
        <Button variant="contained" color="warning">Sari</Button>
        <Button variant="contained" color="info">Acik Mavi</Button>
     
      </Stack>
      <Stack direction='row' spacing={2} display='block'>
        <Button variant='outlined' size="small">Buttonum</Button>
        <Button variant='outlined' size="medium">Buttonum</Button>
        <Button variant='outlined' size="large">Buttonum</Button>
      </Stack>
      <Stack direction='row' spacing={2} >
      
       <Button variant="contained" startIcon={ <AddIcon/>} >Ekle</Button>
       <Button variant="contained" endIcon={ <AddIcon/>} onClick={()=> alert('tiklandi')}>Ekle</Button>
      </Stack>
    </Stack>
  );
};

export default LessonButton;
