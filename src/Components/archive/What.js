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
      {width:"90vw",
       height:"90vw",
       translateX:"-45vw",
       translateY:"-45vw",
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
      {width:"42vw",
       height:"42vw",
       translateX:"-21vw",
       translateY:"-21vw",
        scrollTrigger: {
          trigger: "#startExpand",
          scrub: true,
          start:"top center",
          end: "#endExpand",
        }
      },
      )
    }

    if (matches === false){
      gsap.fromTo("#bubbleText1", 
      {opacity:"0%"},  
      {opacity:"100%",
          scrollTrigger: {
            trigger: "#bubbleText1Appear",
            scrub: true,
            start:"top center",
            end:"+=20%"
          }
        },
        )
      } 
    if (matches === false){
      gsap.to("#bubbleText1", 
        {opacity:"0%",
          scrollTrigger: {
            trigger: "#bubbleText1Disappear",
            scrub: true,
            start:"top center",
            // end:"+=20%"
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
    <Box id="startFadeIn" sx={{position:"absolute", top:{xs:"155vh",sm:"130vh"}, left:"90vw"}}>Start fade-in</Box>
    <Box id="endFadeIn" sx={{position:"absolute", top:{xs:"180vh",sm:"155vh"}, left:"90vw"}}>End fade-in</Box>
    <Box id="startExpand" sx={{position:"absolute", top:{xs:"190vh",sm:"160vh"}, left:"90vw"}}>Start expand</Box>
    <Box id="endExpand" sx={{position:"absolute", top:{xs:"210vh",sm:"180vh"}, left:"90vw"}}>End expand</Box>




    <Box id="bubble" sx={{
        left:{xs:"48%", sm:"75%"}, 
        top:{xs:"30%", sm:"50%"}, 
        borderRadius: "50%", 
        border: "4px solid black", 
        position:"fixed",
        width: 20,
        height: 20}}
    ></Box>


    <Box id="bubbleText1Appear" sx={{position:"absolute", top:{xs:"220vh",sm:"220vh"}, left:"90vw"}}>Bubble text 1</Box>
    <Box id="bubbleText1Disappear" sx={{position:"absolute", top:{xs:"270vh",sm:"270vh"}, left:"90vw"}}>Bubble text 1</Box>



    <Grid item xs={10} sm={5} id="bubbleText1"
      sx={{ 
        position:{xs:"fixed", sm:"relative"},
        top:{xs:"60vh"},
        width:{xs:"90vw"},
        opacity:{xs:"0%", sm:"100%"}
      }}>

      <Typography textAlign="center" 
        sx={{ fontSize: { xs: 40, md: 70 }, 
      }}
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
