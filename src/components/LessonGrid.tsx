import { Grid } from '@mui/material'
import React from 'react'

const LessonGrid = () => {
  return (
    <Grid>
 <Grid container>
    <Grid xs={8}>8 birimlik yer</Grid>
    <Grid xs={4}>4 birimlik yer</Grid>
    {/* <Grid xs={8}>8 birimlik yer</Grid>
    <Grid xs={4}>4 birimlik yer</Grid> */}
 </Grid>
 <Grid container>
    <Grid xs={8}>8 birimlik yer</Grid>
    <Grid xs={4}>4 birimlik yer</Grid>
    {/* <Grid xs={8}>8 birimlik yer</Grid>
    <Grid xs={4}>4 birimlik yer</Grid> */}
 </Grid>
 </Grid>
  )
}

export default LessonGrid