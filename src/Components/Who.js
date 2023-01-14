import React from 'react';

import { Grid, Typography } from '@mui/material/';


export default function Why() {
  return (
    
    <Grid
      container
      spacing={4}
      columns={12}
      justifyContent="center"
      sx={{ height: '105vh', background: "linear-gradient(to right bottom, #430089, #82ffa1)" }}
    >

<Grid item xs={8} mt={'20vh'}>
      <Typography textAlign="center"
        sx={{ fontSize: { xs: 40, md: 70 }, mb: 1, mt: '5%' }}
        component="div"
      >
        Who we are.
      </Typography>

      <Typography textAlign="center"
        sx={{ fontSize: { xs: 20, md: 30 }, mb: 1, mt: '5%' }}
        component="div"
      >
        We are a team of scientists with years of hands-on experience implementing genetic sensors in screening workflows.

      </Typography>
      </Grid>

      <Grid item xs={12} mt={'20vh'}>

      <Typography textAlign="center"
        sx={{ fontSize: { xs: 20, md: 30 }, mb: 1, mt: '5%' }}
        component="div"
      >
        Our work

      </Typography>

      </Grid>



    </Grid>
    
  );
}

;
