import React from 'react';

import { Grid, Typography } from '@mui/material/';


export default function What() {
  return (
    
    <Grid
      container
      spacing={4}
      columns={12}
      justifyContent="center"
      sx={{ height: '105vh', background: "linear-gradient(to right bottom, #430089, #82ffa1)" }}
    >


    <Grid item xs={5} mt={'20vh'}>
      <Typography textAlign="center"
        sx={{ fontSize: { xs: 40, md: 70 }, mb: 1, mt: '5%' }}
        component="div"
      >
        What are genetic sensors?
      </Typography>

      <Typography textAlign="center"
        sx={{ fontSize: { xs: 20, md: 30 }, mb: 1, mt: '5%' }}
        component="div"
      >
        Nature's way of measuring chemicals.
      </Typography>
      </Grid>

      <Grid item xs={6} mt={'20vh'}>

      <Typography textAlign="center"
        sx={{ fontSize: { xs: 20, md: 30 }, mb: 1, mt: '5%' }}
        component="div"
      >
        Show an animation of how genetic sensors work (similar to what Emily created)
      </Typography>

      </Grid>


    </Grid>
    
  );
}

;
