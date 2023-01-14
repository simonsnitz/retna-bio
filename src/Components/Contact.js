import React from 'react';

import { Grid, Typography } from '@mui/material/';


export default function Contact() {
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
        Get in touch.
      </Typography>

      </Grid>

      <Grid item xs={6} mt={'20vh'}>

      </Grid>


    </Grid>
    
  );
}

;
