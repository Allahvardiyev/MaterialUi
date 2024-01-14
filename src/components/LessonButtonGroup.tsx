import { Button,Stack,ButtonGroup } from '@mui/material';
import React from 'react'

const LessonButtonGroup = () => {
  return (
    <Stack direction='row'>
      <ButtonGroup variant='text'>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
      <ButtonGroup variant='outlined'>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
      <ButtonGroup variant='contained'>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
      <ButtonGroup variant='text' orientation='vertical'>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
      <ButtonGroup variant='text' orientation='vertical' color='error'>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
    </Stack>
  )
}

export default LessonButtonGroup