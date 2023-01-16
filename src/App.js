import React from 'react';

import Box from '@mui/material/Box';

import Home from './Components/Home';
import What from './Components/What';
import Why from './Components/Why';
import Who from './Components/Who';
import Do from './Components/Do';
import Contact from './Components/Contact';


function App() {
  return (
    
  <Box
    display="grid"
    gridTemplateColumns="repeat(12, 1fr)"
    gridAutoRows="auto"
    sx={{ height: '100%'}}
  >
    <Box gridColumn="span 12">

      <Home/>
      <What/>
      <Why/>
      <Who/>
      <Do/>
      <Contact/>

    </Box>
  </Box>
    
  );
}

export default App;
