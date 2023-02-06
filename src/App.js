import React from 'react';

import Box from '@mui/material/Box';

import { Routes, Route } from 'react-router-dom';

import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Technology from "./Components/Technology";
import Partnerships from "./Components/Partnerships";
import Contact from "./Components/Contact";

import { useMediaQuery, useTheme } from '@mui/material';

function App() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridTemplateRows={isSmallScreen ? `56px` : `64px`}
      gridAutoRows="auto"
      sx={{ height: '100%' }}
    >
      <Box gridColumn="span 12">
        <NavBar />
      </Box>
      <Box gridColumn="span 12">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Box>
    
  );
}

export default App;
