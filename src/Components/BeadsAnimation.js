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

  // const beads1 = ["bead1", "bead2", "bead3", "bead4", "bead5", "bead6", "bead7", "bead8", "bead9", "bead10"];

  // const beads = ["#bead1", "#bead2", "#bead3", "#bead4", "#bead5", "#bead6", "#bead7", "#bead8", "#bead9", "#bead10"];

  useEffect(() => { 

    var stag = 0;

    beadIDs.forEach((bead, i) =>{
      gsap.fromTo(bead, {x:0}, {x:"97vw", duration:speed, ease:'none', delay:stag, repeat:-1});   
      stag += delay;
    })

  }, [speed, beadIDs, delay]);

  return (
    
    <Box ml={"-15vw"}>

      {beadNames.map((item) => (

        <div id={item} style={{width: 20, height:20, borderRadius: "50%", border: "4px solid black", position:"absolute"}}></div>
      
      ))}


    </Box>
    
  );
}

;
