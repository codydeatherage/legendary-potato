import React from 'react';
import { Box, Button } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/system';
import String from './String';

const FretBoard = ({ numStrings, numFrets, tuning }) => {
    const noteSequence = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    let frets = [];
    let seqIndex = 0;

    for (let i = 0; i < numStrings; i++) {
        let notesOnString = [];
        seqIndex = noteSequence.indexOf(tuning[i]);
        for (let j = 0; j < numFrets + 1; j++) {
            notesOnString.push(noteSequence[seqIndex]);
            seqIndex++;
            if (seqIndex === noteSequence.length) {
                seqIndex = 0;
            }
        }
        frets[i] = notesOnString;
    }
    console.log(frets);

    let fretNumbers = [];
    for(let i = 0; i < numFrets;i++){
        fretNumbers.push(i.toString());
    }

    return (
        <Box sx={{ width: '70vw', margin: 'auto', border: '2px solid #3b1a59', borderRadius: 4 }}>
         {/*    <String notes={fretNumbers}/> */}
            <div sx={{ width: '100%', border: '2px solid #3b1a59', borderRadius: 4 }}>
                <String notes={frets[0]}/>
                <String notes={frets[1]}/>
                <String notes={frets[2]}/>
                <String notes={frets[3]}/>
                <String notes={frets[4]}/>
                <String notes={frets[5]}/>
            </div>
        </Box>


    )
}

export default FretBoard