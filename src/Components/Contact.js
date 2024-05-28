import React, {forwardRef} from "react";

import { Grid, Typography, Box } from '@mui/material/';

import sensor from './sensorStructure.png';



const Contact = forwardRef(function Contact(props, ref) {


  return (
    
    // Background with gradient color
    <Grid
      props={props}
      ref={ref}
      container
      sx={{height: '100vh'}}
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
    <Grid item xs={4} >

        {/* Header */}
      <Typography
        sx={{ fontSize: { xs: 20, md: 48 }, mt: 30 }} component="div">
        Contact
      </Typography>
      <Typography
        sx={{ fontSize: { xs: 14, md: 30 } }} component="div">
        Reach out for references and to learn more about our services.
      </Typography>

        {/* Description */}
      <Typography
        sx={{ fontSize: { xs: 14, md: 24 }, mt: 15 }} component="div">
        contact info
      </Typography>

      </Grid>

    <Grid item xs={6} >
    </Grid>



    </Grid>
    
  );
});

export default Contact;