import React from 'react';

import Box from '@mui/material/Box';


function App() {
  return (
    
  <Box
    display="grid"
    gridTemplateColumns="repeat(12, 1fr)"
    gridAutoRows="auto"
    sx={{ height: '100%' }}
  >
    <Box gridColumn="span 12">

      <h1>Retna Bio</h1>

    </Box>
  </Box>
    
  );
}

export default App;
