import React, { useState } from 'react';
import './App.css';
import { Box } from '@mui/material';
import { styled } from '@mui/system'
import FretBoard from './components/FretBoard'
import Settings from './components/Settings'

const App = () => {
  const [activeRoot, setActiveRoot] = useState('C');
  const [activeScale, setActiveScale] = useState('');
  const tuning = ['E', 'B', 'G', 'D', 'A', 'E'];
  const numFrets = 12;
  return (
    <Box sx={{ height: '100%', width: '100vw', backgroundColor: '#10112b', textAlign: 'center' }}>
      <Settings
        setActiveRoot={setActiveRoot}
        root={activeRoot}
        activeScale={activeScale}
        setActiveScale={setActiveScale}
      />
      <div>
        <Box sx={{ height: '200px', color: 'white', fontSize: '25px' }}>
          <h1>**Full Scale Name**</h1>
          <h4>(1,2,3,5,7,8)</h4>
        </Box>
      </div>

      <FretBoard
        tuning={tuning}
        numFrets={numFrets}
        numStrings={6}
        root={activeRoot}
        scale={activeScale}
      />
    </Box>
  );
}

export default App;
