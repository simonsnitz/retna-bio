
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
      sx={{backgroundColor: "white"}}
      style={{width: '100vw', height: 70, position: 'fixed', top: 0, borderBottom: "1px solid black"}}>

      <Grid item xs={2}>.</Grid>
      <Grid item xs={4} style={{display: 'flex', alignItems: "center"}}>
        <img onClick={() => handleClick("home")} src="retna_logo.png" style={{height: 50}}/>
      </Grid>
      <Grid item xs={2} textAlign="center">
        <Typography onClick={() => handleClick("services")} mt={3} sx={{fontWeight: 400, fontSize: 20 }}>Services</Typography>
      </Grid>
      <Grid item xs={2} textAlign="center">
        <Typography onClick={() => handleClick("contact")} mt={3} sx={{fontWeight: 400, fontSize: 20 }}>Contact</Typography>
      </Grid>

    </Grid>

    {/* <NavBar/> */}
    {/* <div ref={home}><About/></div> */}
    <About ref={home}/>
    <Services ref={services}/>
    <Contact ref={contact}/>

    </Grid>

        

    );
}