import React, { useEffect } from 'react';

import { Grid, Typography, Box } from '@mui/material/';
import BeadsAnimation from './BeadsAnimation';

import sensor from './sensorStructure.png';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Home() {

  gsap.registerPlugin(ScrollTrigger);

  const geneticSensors = "#geneticSensors";

  useEffect(() => {

    gsap.fromTo("#geneticSensors", 
      {opacity:"100%"},
      {opacity:"0%", 
        scrollTrigger: {
          trigger: "#geneticSensors",
          scrub: true,
          start:"top center",
        }
      },
      )

  
  }, []);


  return (
    
    <Grid
      container
      spacing={0}
      columns={12}
      justifyContent="center"
      sx={{ height: '150vh', overflow:'hidden', background: "linear-gradient(to top, #4521fc, #bac1ff)" }}
    >
      <Box
        component="img"
          sx={{
            width: { xs: 100, sm: "80vw" },
            right:0,
            position: "absolute",
          }}
          style={{opacity: "20%"}}
          src={sensor}
      />


    <Grid item xs={10} mt={'20vh'} >
      <Typography textAlign="center"
        sx={{ fontSize: { xs: 40, md: 70 }, mt: '5%' }}
        component="div"
      >
        We accelerate screening workflows using
      </Typography>
      <Typography id="geneticSensors" textAlign="center"
        sx={{ fontSize: { xs: 40, md: 70 }, position:"fixed", left:"50%", translate:"-50%" }}
        component="div">
      genetic sensors
      </Typography>

      </Grid>


      <Grid item xs={10} mt={50}>
        <BeadsAnimation speed={10} delay={1} name={"slow_beads"}/>
      </Grid>
      <Grid item xs={10} mt={-5}>
        <BeadsAnimation speed={2} delay={0.2} name={"fast_beads"}/>
      </Grid>

    </Grid>
    
  );
}

;
