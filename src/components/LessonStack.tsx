import React from "react";
import Stack from '@mui/material/Stack';
import { ListItem,Divider } from "@mui/material";
const LessonStack = () => {
  return (
    <Stack 
    direction={{ xs: 'column', sm: 'row' }} 
    divider={<Divider orientation="vertical" flexItem />}
    spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
};

export default LessonStack;
