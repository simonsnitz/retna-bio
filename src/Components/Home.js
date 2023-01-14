import React from 'react';

import { Grid, Typography } from '@mui/material/';


export default function Home() {
  return (
    
    <Grid
      container
      spacing={4}
      columns={12}
      justifyContent="center"
      sx={{ height: '105vh', background: "linear-gradient(to bottom, #430089, #82ffa1)" }}
    >


    <Grid item xs={10} mt={'20vh'}>
      <Typography textAlign="center"
        sx={{ fontSize: { xs: 40, md: 70 }, mb: 1, mt: '5%' }}
        component="div"
      >
        We help clients leverage genetic sensors to accelerate screening workflows
      </Typography>

      <Typography textAlign="center"
        sx={{ fontSize: { xs: 10, md: 18 }, mb: 1, mt: '5%' }}
        component="div"
      >
        Show little 'beads' travel from left to right on the screen. One stream going fast and another, slow.
      </Typography>
      </Grid>


    </Grid>
    
  );
}

;
