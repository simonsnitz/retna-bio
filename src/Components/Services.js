import React, {forwardRef} from "react";

import { Grid, Typography } from '@mui/material/';


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
        sx={{ fontSize: { xs: 20, md: 40 }, mt: 10 }} color={"white"} component="div" textAlign="center" fontFamily="Argent">
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

        <Grid item xs={12} textAlign="center" sx={{width:{xs:200, sm:500 }}}>
            <img src="feasibility_analysis.png" style={{width: "100%"}}/>
        </Grid>

        <Grid item xs={12} >
          <Typography sx={{ fontSize: { xs: 12, md: 20 }}}  component="div" color="#ededed" padding={7}>
          A combination of literature analysis and bioinformatic prediction tools are used to assess
          the feasibility of building genetic sensors for your target molecule in your target organism.
          The resulting feasibility report can be used to guide important decisions for future strain 
          and enzyme engineering projects.
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

        <Grid item xs={12} textAlign="center" sx={{width:{xs:200, sm:500 }}}>
            <img src="genetic_design.png" style={{width: "100%"}}/>
        </Grid>

        <Grid item xs={12} >
        <Typography sx={{ fontSize: { xs: 12, md: 20 }}}  component="div" padding={7} color="#ededed">
          Host constraints and genetic element availability are used to guide biosensor circuit designs that
          fit the target application. Detailed protocols are created for evaluating biosensor designs.
          The resulting genetic sequences and protocols provide a clear actionable plan for sensor development.
        </Typography>
        </Grid>
        
      </Grid>
    </Grid>



    <Grid item xs={2} >
      {/* Spacer */}
    </Grid>


    </Grid>
    </Grid>
    
  );
});

export default Services;