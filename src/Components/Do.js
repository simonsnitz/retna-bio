import React from 'react';

import { Grid, Typography } from '@mui/material/';


export default function Do() {
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
        What we do.
      </Typography>

      <Typography textAlign="center"
        sx={{ fontSize: { xs: 20, md: 30 }, mb: 1, mt: '5%' }}
        component="div"
      >
        We provide an array of resources and services to help you screen faster.
        Our mission is to empower sustainable biomanufacturing with protein-powered screening.
      </Typography>
      </Grid>

      <Grid item xs={12} mt={'20vh'}>

      <Typography textAlign="center"
        sx={{ fontSize: { xs: 20, md: 30 }, mb: 1, mt: '5%' }}
        component="div"
      >
       ( panels of services / resources )
      </Typography>

      </Grid>


    </Grid>
    
  );
}

;
