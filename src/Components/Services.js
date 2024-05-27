import React, {forwardRef} from "react";

import { Grid, Typography, Box } from '@mui/material/';

import sensor from './sensorStructure.png';



const Services = forwardRef(function Services(props, ref) {


  return (
    
    // Container
    <Grid
      props={props}
      ref={ref}
      container
      spacing={0}
      columns={12}
      justifyContent="center"
    >

    <Grid item xs={2} >
      {/* Spacer */}
    </Grid>
    <Grid item xs={4} >

        {/* Topic Header */}
      <Typography
        sx={{ fontSize: { xs: 20, md: 48 }, mt: 20 }} component="div">
        Services
      </Typography>

      </Grid>

    <Grid item xs={6} >
      {/* Spacer */}
    </Grid>


    {/* Strategy section */}
    <Grid container columns={12}>

    <Grid item xs={2}>{/* Spacer */}</Grid>
      <Grid item xs={10}>
        <Typography
          sx={{ fontSize: { xs: 24, md: 36 }, mt: 10 }} component="div">
          Project strategy
        </Typography>
      </Grid>

      <Grid item xs={2}>{/* Spacer */}</Grid>
      <Grid item xs={4}>
        <Typography  sx={{ fontSize: { xs: 24, md: 36 }, mt: 10 }} style={{border: "1px solid black"}} component="div" textAlign="center">
          Gene identification
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography  sx={{ fontSize: { xs: 24, md: 36 }, mt: 10 }} component="div" textAlign="center">
          Feasibility assessment
        </Typography>
      </Grid>
      <Grid item xs={2}>{/* Spacer */}</Grid>


          {/* Genetic Design section */}
    <Grid container columns={12}>

      <Grid item xs={2}>{/* Spacer */}</Grid>
      <Grid item xs={10}>
        <Typography
          sx={{ fontSize: { xs: 24, md: 36 }, mt: 10 }} component="div">
          Genetic Design
        </Typography>
      </Grid>

      <Grid item xs={2}>{/* Spacer */}</Grid>
      <Grid item xs={4}>
        <Typography  sx={{ fontSize: { xs: 24, md: 36 }, mt: 10 }} style={{border: "1px solid black"}} component="div" textAlign="center">
          Component design
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography  sx={{ fontSize: { xs: 24, md: 36 }, mt: 10 }} component="div" textAlign="center">
          Circuit design
        </Typography>
      </Grid>
      <Grid item xs={2}>{/* Spacer */}</Grid>

    </Grid>




    </Grid>
    </Grid>
    
  );
});

export default Services;