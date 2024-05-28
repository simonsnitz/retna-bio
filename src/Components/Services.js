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


    {/* Feasibility section */}
    <Grid container columns={12}>

    <Grid item xs={2}>{/* Spacer */}</Grid>
      <Grid item xs={8}>
        <Typography
          sx={{ fontSize: { xs: 24, md: 36 }, mt: 10 }} component="div" textAlign="center">
          Feasibility assessment
        </Typography>
      </Grid>

        {/* Feasibility Content */}
      <Grid container columns={12}>
        <Grid item xs={2}> 
            {/* Spacer  */}
        </Grid>
      <Grid item xs={4} style={{border: "1px solid black", height: 100}}>
        {/* Image */}
      </Grid>
      <Grid item xs={4} style={{border: "1px solid black", height: 100}}>
        {/* Text */}
      </Grid>
      </Grid>


    {/* Genetic Design section */}
    <Grid container columns={12}>

      <Grid item xs={2}>{/* Spacer */}</Grid>
      <Grid item xs={8}>
        <Typography
          sx={{ fontSize: { xs: 24, md: 36 }, mt: 10 }} component="div" textAlign="center">
          Genetic Design
        </Typography>
      </Grid>

        {/* Genetic Design Content */}
        <Grid container columns={12}>
        <Grid item xs={2}> 
            {/* Spacer  */}
        </Grid>
      <Grid item xs={4} style={{border: "1px solid black", height: 100}}>
        {/* Image */}
      </Grid>
      <Grid item xs={4} style={{border: "1px solid black", height: 100}}>
        {/* Text */}
      </Grid>
      </Grid>

    </Grid>




    </Grid>
    </Grid>
    
  );
});

export default Services;