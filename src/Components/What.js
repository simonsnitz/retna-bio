import React, { useEffect } from 'react';

import { Grid, Typography, Box } from '@mui/material/';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function What() {

  gsap.registerPlugin(ScrollTrigger);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));


  useEffect(() => {




    gsap.fromTo("#bubble", 
    {opacity:"0%"},
      {opacity:"100%",
      scrollTrigger: {
        trigger: "#startFadeIn",
        scrub: true,
        start:"top center",
        end: "#endFadeIn",
      }
    },
    )

    if (matches === false){
    gsap.to("#bubble", 
      {width:"300px",
       height:"300px",
       translateX:"-150px",
       translateY:"-150px",
        scrollTrigger: {
          trigger: "#startExpand",
          scrub: true,
          start:"top center",
          end: "#endExpand",
        }
      },
      )
    } else {
      gsap.to("#bubble", 
      {width:"600px",
       height:"600px",
       translateX:"-300px",
       translateY:"-300px",
        scrollTrigger: {
          trigger: "#startExpand",
          scrub: true,
          start:"top center",
          end: "#endExpand",
        }
      },
      )
    }

  
  }, [matches]);



  
  return (
    
    <Grid
      container
      spacing={4}
      columns={12}
      justifyContent="center"
      sx={{ height: '205vh', background: "linear-gradient(to top, #be78ff, #4521fc)" }}
    >

      {/* Markers */}
    <div id="startFadeIn" style={{position:"absolute", top:"130vh", left:"90vw"}}>Start fade-in</div>
    <div id="endFadeIn" style={{position:"absolute", top:"155vh", left:"90vw"}}>End fade-in</div>
    <div id="startExpand" style={{position:"absolute", top:"160vh", left:"90vw"}}>Start expand</div>
    <div id="endExpand" style={{position:"absolute", top:"190vh", left:"90vw"}}>End expand</div>




    <Box id="bubble" sx={{
        left:{xs:"50%", sm:"75%"}, 
        top:"50%", 
        borderRadius: "50%", 
        border: "4px solid black", 
        position:"fixed",
        width: 20,
        height: 20}}
    ></Box>




    <Grid item xs={5} mt={'20vh'}>
      <Typography textAlign="center" id="what"
        sx={{ fontSize: { xs: 40, md: 70 }, mb: 1, mt: '5%' }}
        component="div"
      >
          Nature's way of measuring chemicals.
      </Typography>



      </Grid>

      <Grid item xs={6} mt={'20vh'}>


      </Grid>


    </Grid>
    
  );
}

;
