import React, {forwardRef} from "react";

import { Grid, Typography } from '@mui/material/';


const Services = forwardRef(function Services(props, ref) {


  return (
    
    // Container
    <Grid
      props={props}
      ref={ref}
      container
      sx={{height: {xs:1200, sm: 900, md:1100}}}
      spacing={0}
      columns={12}
      justifyContent="center"
      backgroundColor="#0088CD"
      // backgroundColor="#9655cf"
    >
    

        {/* Topic Header */}
    <Grid item xs={12} >
      <Typography
        sx={{ fontSize: { xs: 24, sm: 34, md: 40 }, mt: {xs:5, sm:10, md:15} }} color={"white"} component="div" textAlign="center" fontFamily="Argent">
        Services
      </Typography>
    </Grid>



    <Grid container xs={12} columns={12}>


      {/* Feasibility section */}
      <Grid item xs={12} sm={6} md={6} sx={{padding: {xs:3, sm:5, md:15}} }>
        <Grid container  >
            {/* Header */}
          <Grid item xs={12} textAlign="center">
            <Typography sx={{ fontSize: { xs: 16, sm:20, md: 24 }}}  color="white" component="div" >
            Feasibility Analysis
          </Typography>
          </Grid>

          <Grid item xs={12} textAlign="center" mt={2}>
              <img src="feasibility_analysis.png" style={{width: "100%"}}/>
          </Grid>

          <Grid item xs={12} >
            <Typography sx={{ fontSize: { xs: 14, sm:16, md: 20 }, mt:{xs: 0, sm:3}}}  component="div" color="#ededed" padding={2} mt={3}>
            A combination of literature analysis and bioinformatic prediction tools are used to assess
            the feasibility of building genetic sensors for your target molecule in your target organism.
            The resulting feasibility report can be used to guide important decisions for future strain 
            and enzyme engineering projects.
          </Typography>
          </Grid>
          
        </Grid>
      </Grid>



      {/* Genetic Design section */}
      <Grid item xs={12} sm={6} md={6} sx={{padding: {xs:3, sm:5, md:15}}}>
        <Grid container  >
              {/* Header */}
            <Grid item xs={12} textAlign="center" sx={{mt:{xs:7, sm:0}}}>
              <Typography sx={{ fontSize: { xs: 16, sm:20, md: 24 }}}  component="div" color="white">
              Genetic Design
            </Typography>
            </Grid>

            <Grid item xs={12} textAlign="center" mt={2}>
                <img src="genetic_design.png" style={{width: "100%"}}/>
            </Grid>

            <Grid item xs={12} >
            <Typography sx={{ fontSize: { xs: 14, sm:16, md: 20 }, mt:{xs: 0, sm:3}}}  component="div" color="#ededed" padding={2}>
              Host constraints and genetic element availability are used to guide biosensor circuit designs that
              fit the target application. Detailed protocols are created for evaluating biosensor designs.
              The resulting genetic sequences and protocols provide a clear actionable plan for sensor development.
            </Typography>
            </Grid>
            
          </Grid>
        </Grid>




    </Grid>
    </Grid>
    
  );
});

export default Services;