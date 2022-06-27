import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { styled } from '@mui/system'
import FretBoard from './components/FretBoard'
import FretLabels from './components/FretLabels'

const Settings = styled('div')({
  height: '25vh',
  width: '70vw',
  border: '2px solid #3b1a59',
  padding: 10,
  margin: 'auto',
  borderRadius: 4,
})

const Setting = styled('div')({
  width: '100%',
  textAlign: 'left',
  color: 'white',
  height: '25%',
})


const App = () => {
  const tuning = ['E', 'B', 'G', 'D', 'A', 'E'];
  const numFrets = 13;
  let fretNumbers = [];
  for (let i = 0; i < numFrets; i++) {
    fretNumbers.push(i.toString());
  }
  return (
    <Box sx={{ height: '100%', width: '100vw', backgroundColor: '#10112b', textAlign: 'center' }}>
      <Settings>
        <Setting>Accidentals</Setting>
        <Setting>Root</Setting>
        <Setting>Scale</Setting>
        <Setting>Tuning</Setting>
      </Settings>
      <div>
        <Box sx={{ height: '200px', color: 'white', fontSize: '25px' }}>
          <h1>**Full Scale Name**</h1>
          <h4>(1,2,3,5,7,8)</h4>
        </Box>
      </div>
      <FretLabels labels={fretNumbers} />
      <FretBoard tuning={tuning} numFrets={numFrets} numStrings={6} />
    </Box>
  );
}

export default App;
