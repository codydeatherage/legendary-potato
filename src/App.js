import React, { useState } from 'react';
import './App.css';
import { Box } from '@mui/material';
import FretBoard from './components/FretBoard'
import Settings from './components/settings/Settings'

const scales = {
  //https://en.wikipedia.org/wiki/List_of_musical_scales_and_modes                                    
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
  'Melodic Minor':{
    name: 'Melodic Minor',
    intervals: [2,1,2,2,2,2],
    degrees: ['1', '2', 'b3', '4', '5', '6', '7']
  },
  'Major Pentatonic':{
    name: 'Major Pentatonic',
    intervals: [2,2,3,2],
    degrees: ['1','2','3','5','6']
  },
  'Minor Pentatonic':{
    name: 'Minor Pentatonic',
    intervals: [3,2,2,3],
    degrees:['1', 'b3', '4','5','b7']
  },
  'Blues': {
    name: 'Blues',
    intervals: [3, 2, 1, 1, 3],
    degrees: ['1', 'b3', '4', 'b5', '5', 'b7']
  },
  'Dorian': {
    name: 'Dorian',
    intervals: [2, 1, 2, 2, 2, 1],
    degrees: ['1', '2', 'b3', '4', '5', '6', 'b7']
  },

}

const App = () => {
  const [activeRoot, setActiveRoot] = useState('C');
  const [activeScale, setActiveScale] = useState(scales['Major']);
  const [tuning, setTuning] = useState(['E', 'B', 'G', 'D', 'A', 'E']);
  const [accidental, setAccidental] = useState('sharp');
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
    <Box sx={{ height: '100vh', width: '100vw', backgroundColor: '#002649', textAlign: 'center' }}>
      <Settings
        accidental={accidental}
        setAccidental={setAccidental}
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
