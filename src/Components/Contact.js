import React, {forwardRef} from "react";

import { Grid, Typography, Link } from '@mui/material/';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Contact = forwardRef(function Contact(props, ref) {


  return (
    
    // Background with gradient color
    <Grid
      props={props}
      ref={ref}
      container
      spacing={0}
      columns={12}
      mb={20}
      justifyContent="center"
    >


    <Grid item xs={2} >
    </Grid>
    <Grid item xs={8} textAlign="center">

        {/* Header */}
      <Typography
        sx={{ fontSize: { xs: 20, md: 36 }, mt: 15 }} component="div" >
        Contact
      </Typography>
      <Typography
        sx={{ fontSize: { xs: 14, md: 22 } }} mt={2} mb={5} component="div">
        Please reach out by email for references and to learn more about our services.
      </Typography>

        {/* Email */}
      <Grid container justifyContent={"center"} sx={{height: 30}} >
      <MailOutlineIcon sx={{ height: "100%", display: "inline", mr:1 }} />
      <Typography
        sx={{ fontSize: { xs: 14, md: 20 }, display: "inline" }} component="div">
        <b>Email: </b>
        <a href="mailto:simon@retna.bio" style={{textDecoration:"none", color: "#005ac2"}} target="_blank" rel="noopener noreferrer"> simon@retna.bio</a>
      </Typography>
      </Grid>

      <Grid container justifyContent={"center"} mt={10}>
        {/* Social media logos */}
        <Link
          href="https://www.linkedin.com/company/retnabio/"
          target="_blank">
          <LinkedInIcon sx={{ width: '50px', height: '50px' }} />
        </Link>
        <Link
          href="https://x.com/retnabio"
          target="_blank">
          <TwitterIcon sx={{ width: '50px', height: '50px', ml:3 }} />
        </Link>
      </Grid>

      </Grid>

    <Grid item xs={2} >
    </Grid>



    </Grid>
    
  );
});

export default Contact;