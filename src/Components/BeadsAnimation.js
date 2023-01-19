import React, {useEffect, useMemo} from 'react';

import { Box } from '@mui/material/';
import { gsap } from 'gsap';


export default function BeadsAnimation({name, speed, delay}) {

  // var beadIDs = [];
  var beadIDs = useMemo(() => [], []);
  var beadNames = [];

  for (let i=1; i<16; i++){
    beadIDs.push(`#${name}`+i.toString());
    beadNames.push(`${name}`+i.toString());
  }


  useEffect(() => { 

    var stag = 0;

    beadIDs.forEach((bead, i) =>{
      gsap.fromTo(bead, {x:0}, {x:"100vw", duration:speed, ease:'none', delay:stag, repeat:-1});   
      stag += delay;
    })

  }, [speed, beadIDs, delay]);

  return (
    
    <Box sx={{ml:{xs:"-15vw",sm:"-10vw"}}}>

      {beadNames.map((item, i) => (

        <Box id={item} key={i} sx={{width: 20, height:20, borderRadius: "50%", border: {xs:"3px solid black",sm:"4px solid black"}, position:"absolute"}}></Box>
      
      ))}


    </Box>
    
  );
}

;
