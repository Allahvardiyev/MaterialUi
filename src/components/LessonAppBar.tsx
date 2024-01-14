import React from 'react'
import { 
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Menu,
    MenuItem,
    Button,
    colors,
 } from '@mui/material'
 import AppsIcon from '@mui/icons-material/Apps';
import { Margin } from '@mui/icons-material';
import { useState } from 'react';
const LessonAppBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const openControl=Boolean(anchorEl)
  console.log(openControl);
  
  const handleClick=(event:React.MouseEvent<HTMLButtonElement>)=>{
    setAnchorEl(event.currentTarget)
      
  }
  const handleClose=(event:React.MouseEvent<HTMLButtonElement>)=>{
    setAnchorEl(null)
      }
  return (
    <AppBar>
        <Toolbar>
            <IconButton>
               <AppsIcon/>
        </IconButton>
        <Typography sx={{marginRight: 'auto'}} variant='h6' component='div'>Header Başlığı</Typography>
        <Stack direction='row'>
            <Button sx={{color: 'white'}}>AnaSayfa</Button>
            <Button sx={{color: 'white'}}>Hakkimda</Button>
            <Button sx={{color: 'white'}}>Fiyatlar</Button>
            <Button sx={{color: 'white'}}>Ürünlər</Button>
            <Button sx={{color: 'white'}} onClick={handleClick} >Indirimdekiler</Button>
        </Stack>
        <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
            <MenuItem >Kitablar</MenuItem>
            <MenuItem >Dəftərlər</MenuItem>
        </Menu>
        </Toolbar>
    </AppBar>
  )
}

export default LessonAppBar