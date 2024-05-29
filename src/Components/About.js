import React, {forwardRef} from "react";

import { Grid, Typography, Box, Button } from '@mui/material/';

import sensor from './sensorStructure.png';


const About = forwardRef(function About(props, ref) {


  return (
    
    // Background with gradient color
    <Grid
      props={props}
      ref={ref}
      container
      sx={{height: "100vh", border: "1px solid black"}}
      spacing={0}
      columns={12}
      justifyContent="center"
    >

    {/* RamR structure backgorund image */}
      <Box
        component="img"
        id="picture"
          sx={{
            width: { xs: "150vw", sm: "80vw" },
            right: 0,
            top: { xs:"35vh", sm:0},
            position: "absolute",
          }}
          style={{opacity: "20%", zIndex:-10}}
          src={sensor}
      />

    <Grid item xs={2} >
    </Grid>
    <Grid item xs={4} mt={20}>

    <Typography
        sx={{ fontSize: { xs: 14, md: 36 }, mt: 10 }} component="div">
          Synthetic Biology Consulting
    </Typography>

        {/* Description */}
      <Typography
        sx={{ fontSize: { xs: 14, md: 22 }, mt: 10 }} component="div">
        Retna Bio is a consulting firm managed and operated by 
        <a href="https://scholar.google.com/citations?hl=en&user=4lfhK5wAAAAJ" style={{textDecoration: "None", color: "#1971ff"}}
        target="_blank" rel="noopener noreferrer"> Simon d'Oelsnitz</a>
        , a Synthetic Biology Fellow at Harvard Medical School. 
        We specialize in the design and application of <b>chemical-responsive 
        genetic circuits</b> in microbial hosts.
        Our mission is to help bridge the gap between academic innovation and 
        industry-led impact.
      </Typography>

      <Button 
        variant="contained"
        style={{marginTop: 35}}
        >
        <a href="mailto:simon@retna.bio" style={{textDecoration: "None", color: "white"}}
          target="_blank" rel="noopener noreferrer"> Get in touch</a>
          
      </Button>

      {/* <Typography
        sx={{ fontSize: { xs: 14, md: 22 }, mt: 7 }} component="div" style={{border: "1px solid black", width: 200}}>
          Get in touch
      </Typography> */}

      </Grid>

    <Grid item xs={6} >
    </Grid>



    </Grid>
    
  );
});

export default About;
