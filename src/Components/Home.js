
import { Grid, Typography } from '@mui/material/';
import React from 'react';

// Components
import About from './About.js';
import Services from './Services.js';
import Contact from './Contact.js';


import {useRef} from 'react';


export default function Home() {


  const home = useRef(null);
  const services = useRef(null);
  const contact = useRef(null);


  const handleClick = (element) => {
    if (element === "home") {
      home.current?.scrollIntoView({behavior: 'smooth'});
    }
    else if (element === "services") {
      services.current?.scrollIntoView({behavior: 'smooth'});
    }
    else if (element === "contact") {
      contact.current?.scrollIntoView({behavior: 'smooth'});
    };
  };



    return (

      //Parent container
    <Grid
        container
        spacing={0}
        alignItems="center"
        width= '100vw'
        justifyContent="center"
      >

    {/* Navigation Bar */}
    <Grid container 
      columns={12}
      sx={{backgroundColor: "white"}}
      style={{width: '100vw', height: 70, position: 'fixed', top: 0, borderBottom: "1px solid black", zIndex:5, display: 'flex', alignItems: "center",}}>

      <Grid item xs={0} sm={2}></Grid>
      <Grid item xs={4} sx={{ height: {xs:30, sm: 50}, ml: {xs:2, sm:0} }}>
        <img onClick={() => handleClick("home")} src="retna_logo.png" style={{height: '100%'}}/>
      </Grid>
      <Grid item xs={4} sm={2} sx={{textAlign:"center"}}>
        <Typography onClick={() => handleClick("services")} sx={{fontWeight: 400, fontSize: {xs:14, sm:22} }}>Services</Typography>
      </Grid>
      <Grid item xs={3} sm={2} sx={{textAlign: "center"}}>
        <Typography onClick={() => handleClick("contact")} sx={{fontWeight: 400, fontSize: {xs:14, sm:22} }}>Contact</Typography>
      </Grid>
    </Grid>



      {/* Main content */}
    <About ref={home}/>
    <Services ref={services}/>
    <Contact ref={contact}/>


      {/* Footer */}
    <Grid item xs={12} style={{backgroundColor: "#333333", height: 100}} textAlign="center" justifyContent={"center"}>
      <Typography sx={{fontWeight: 400, fontSize: 14, color: "#c4c4c4", marginTop: 5}} >
        Retna Bio LLC - &copy; 2024. All Rights Reserved.
      </Typography>
    </Grid>


    </Grid>

        

    );
}