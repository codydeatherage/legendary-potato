import React, { useState } from 'react';
import './App.css';
import { Box } from '@mui/material';
import FretBoard from './components/FretBoard'
import Settings from './components/settings/Settings'

const scales = {
  //number at each index is interval between each step in scale
  //returns intervals required to reach root note, one octave higher
  //1=half-step, 2=whole step
  'Major': {
    name: 'Major',
    intervals: [2, 2, 1, 2, 2, 2],
    degrees: ['1', '2', '3', '4', '5', '6', '7']
  },
  'Harmonic Major': {
    name: 'Harmonic Major',
    intervals: [2, 2, 1, 2, 1, 3],
    degrees: ['1', '2', '3', '4', '5', 'b6', '7']
  },
  'Natural Minor': {
    name: 'Natural Minor',
    intervals: [2, 1, 2, 2, 1, 2],
    degrees: ['1', '2', 'b3', '4', '5', 'b6', 'b7']
  },
  'Blues': {
    name: 'Blues',
    intervals: [3, 2, 1, 1, 3],
    degrees: ['1', 'b3', '4', 'b5', '5', 'b7']
  }
}

const App = () => {
  const [activeRoot, setActiveRoot] = useState('C');
  const [activeScale, setActiveScale] = useState(scales['Major']);
  const [tuning, setTuning] = useState(['E', 'B', 'G', 'D', 'A', 'E']);
  const numFrets = 12;

  const { degrees } = activeScale;
  let displayDegrees = '';
  for (let i = 0; i < degrees.length; i++) {
    displayDegrees += degrees[i];
    if (i !== degrees.length - 1) {
      displayDegrees += ', ';
    }
  }
  return (
    <Box sx={{ height: '100%', width: '100vw', backgroundColor: '#10112b', textAlign: 'center' }}>
      <Settings
        scales={scales}
        tuning={tuning}
        setTuning={setTuning}
        setActiveRoot={setActiveRoot}
        root={activeRoot}
        activeScale={activeScale}
        setActiveScale={setActiveScale}
      />
      <Box sx={{ height: '200px', color: 'white', fontSize: '25px' }}>
        <h1>{`${activeRoot} ${activeScale.name} `}</h1>
        <h4>{`(${displayDegrees})`}</h4>
      </Box>
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
