import React from "react";
import {
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
const LessonAcordion = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);
 
 
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };
  return (
    <div>
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Ilk Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint
          eum velit reprehenderit exercitationem, quia cumque vero possimus
          nihil officiis nostrum, magni aut suscipit aliquam. Ipsum, nulla.
          Fuga, nulla qui!
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>İkinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint
          eum velit reprehenderit exercitationem, quia cumque vero possimus
          nihil officiis nostrum, magni aut suscipit aliquam. Ipsum, nulla.
          Fuga, nulla qui!
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Üçüncü Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint
          eum velit reprehenderit exercitationem, quia cumque vero possimus
          nihil officiis nostrum, magni aut suscipit aliquam. Ipsum, nulla.
          Fuga, nulla qui!
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default LessonAcordion;
