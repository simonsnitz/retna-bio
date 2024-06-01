import React, {forwardRef} from "react";

import { Grid, Typography, Box, Button } from '@mui/material/';

import SendIcon from '@mui/icons-material/Send';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { keyframes } from '@mui/system';


const About = forwardRef(function About(props, ref) {
const theme = useTheme();
const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
const buttonProps = {
  size: isSmallScreen ? "small" : "medium"
};

// animations
const enterWords = keyframes`
  from {
    opacity: 0;
    transform: translate(0,5vh);
  }
  to {
    opacity: 100;
    transform: translate(0,0);
  }
`;
const enterStructure = keyframes`
  from {
    transform: translate(0,2vh);
  }
  to {
    transform: translate(0,0);
  }
`;

  return (
    
    // Background with gradient color
    <Grid
      props={props}
      ref={ref}
      container
      sx={{height: {xs:700, sm:850, md:1000}, border: "1px solid black"}}
      spacing={0}
      columns={12}
      justifyContent="center"
    >

    {/* RamR structure backgorund image */}
      <Box
        component="img"
        id="picture"
        alt="Biosensor Structure image"
          sx={{
            width: { xs: "180vw", sm: "140vw", md: "80vw" },
            right: 0,
            top: { xs:"45vh", sm:"35vh", md:0},
            position: "absolute",
            animation: `${enterStructure} 1s ease`,
          }}
          style={{opacity: '20%', zIndex:-10}}
          src="sensorStructure.png"
      />

    <Grid item xs={1} md={2} >
    </Grid>
    <Grid item xs={9} md={4} sx={{mt:{xs:10, sm:15, md: 20}}} >

    <Typography
        sx={{ fontSize: { xs: 24, sm: 34, md: 40 }, mt:8, animation: `${enterWords} 1s ease` }} component="div" fontFamily="Argent">
          Synthetic Biology Consulting
    </Typography>

        {/* Description */}
      <Typography
        sx={{ fontSize: { xs: 14, sm:18, md: 22 }, mt: {xs:3, sm:5, md:10}, animation: `${enterWords} 1s ease` }} component="div" >
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
        sx={{animation: `${enterWords} 1s ease`}}
        {...buttonProps}
        endIcon={<SendIcon />}
        style={{marginTop: 35}}
        >
        <a href="mailto:simon@retna.bio" style={{textDecoration: "None", color: "white"}}
          target="_blank" rel="noopener noreferrer"> Get in touch</a>
          
      </Button>


      </Grid>

    <Grid item xs={6} >
    </Grid>



    </Grid>
    
  );
});

export default About;
