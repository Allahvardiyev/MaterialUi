import React from "react";
import { Typography } from "@mui/material";

const LessonTypography = () => {
  return (
    <div>
      <Typography variant="body1">
        Body1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        blanditiis tempore quas odit, consequatur alias saepe, esse dolorem,
        asperiores beatae corporis fugit nobis corrupti ducimus eius iste minus
        reprehenderit quidem!D
      </Typography>
      <Typography variant="body2">
        Body2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        blanditiis tempore quas odit, consequatur alias saepe, esse dolorem,
        asperiores beatae corporis fugit nobis corrupti ducimus eius iste minus
        reprehenderit quidem!D
      </Typography>
      <Typography variant="h1">H1 Gorunumu</Typography>
      <Typography variant="h2">H2 Gorunumu</Typography>
      <Typography variant="h3">H3 Gorunumu</Typography>
      <Typography variant="h4">H4 Gorunumu</Typography>
      <Typography variant="h5">H5 Gorunumu</Typography>
      <Typography variant="h6">H6 Gorunumu</Typography>

      <Typography variant="h1" component='h4'>H1 Gorunumu</Typography>

      <Typography variant="h1" align="left">H1 Gorunumu</Typography>
      <Typography variant="h1" align="right">H1 Gorunumu</Typography>

      <Typography variant="subtitle1">Alt baslik 1</Typography>
      <Typography variant="subtitle2">Alt baslik 2</Typography>
    </div>
  );
};

export default LessonTypography;
