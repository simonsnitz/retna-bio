import React from 'react';

import Box from '@mui/material/Box';

import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    

  <Box
    display="grid"
    gridTemplateColumns="repeat(12, 1fr)"
    gridAutoRows="auto"
    sx={{ height: '100%'}}
  >
    <Box gridColumn="span 12">

    <Routes>
      
          <Route path="/*" element={<Home />} />

    </Routes>

    </Box>
  </Box>
    
  );
}

export default App;
