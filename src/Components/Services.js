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
      backgroundColor="#0088CD"
      // backgroundColor="#9655cf"
    >
    
    <Grid item xs={2} >
      {/* Spacer */}
    </Grid>

        {/* Topic Header */}
    <Grid item xs={8} >
      <Typography
        sx={{ fontSize: { xs: 20, md: 36 }, mt: 10 }} color={"white"} component="div" textAlign="center">
        Services
      </Typography>
    </Grid>

    <Grid item xs={2} >
      {/* Spacer */}
    </Grid>


    <Grid container xs={12} columns={12}>

    <Grid item xs={2} >
      {/* Spacer */}
    </Grid>

    <Grid item xs={4} >

    {/* Feasibility section */}
      <Grid container  mt={5}>
          {/* Header */}
        <Grid item xs={12} textAlign="center">
          <Typography sx={{ fontSize: { xs: 16, md: 24 }}}  color="white" component="div" >
          Feasibility Analysis
        </Typography>
        </Grid>

        <Grid item xs={12} textAlign="center">
          <Typography sx={{ fontSize: { xs: 16, md: 30 }}}  component="div" style={{border: "1px solid black"}}>
          Image
        </Typography>
        </Grid>

        <Grid item xs={12} >
          <Typography sx={{ fontSize: { xs: 12, md: 20 }}}  component="div" color="white" padding={7}>
            Content
        </Typography>
        </Grid>
        
      </Grid>
    </Grid>

    <Grid item xs={4} >

    {/* Genetic Design section */}
    <Grid container  mt={5}>
          {/* Header */}
        <Grid item xs={12} textAlign="center">
          <Typography sx={{ fontSize: { xs: 16, md: 24 }}}  component="div" color="white">
          Genetic Design
        </Typography>
        </Grid>

        <Grid item xs={12} textAlign="center">
          <Typography sx={{ fontSize: { xs: 16, md: 30 }}}  component="div" style={{border: "1px solid black"}}>
          Image
        </Typography>
        </Grid>

        <Grid item xs={12} >
        <Typography sx={{ fontSize: { xs: 12, md: 20 }}}  component="div" padding={7} color="white">
          Content
        </Typography>
        </Grid>
        
      </Grid>
    </Grid>



    <Grid item xs={2} >
      {/* Spacer */}
    </Grid>



      {/* <Grid item xs={4}>
        <Typography
          sx={{ fontSize: { xs: 24, md: 36 }, mt: 10 }} component="div" textAlign="center">
          Feasibility analysis
        </Typography>
      </Grid> */}




      {/* <Grid item xs={4} style={{border: "1px solid black", height: 100}}> */}
        {/* Image */}
      {/* </Grid> */}









    </Grid>
    </Grid>
    
  );
});

export default Services;