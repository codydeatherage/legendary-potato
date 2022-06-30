import React from 'react';
import { Box } from '@mui/material';
import String from './String';

const getScaleIntervals = (scale) => { //how scales are built
    //number at each index is interval between each step in scale
    //returns intervals required to reach root note, one octave higher
    //1=half-step, 2=whole step
    switch (scale) {
        case 'Major': return [2, 2, 1, 2, 2, 2];
        case 'Minor': return [2, 1, 2, 2, 1, 2];
        default: return [];
    }
}
const FretBoard = ({ numStrings, numFrets, tuning, root, scale }) => {

    const noteSequence = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    let frets = [];
    let seqIndex = 0;
    let notesInScale = [root];
    if (scale) {
        let intervals = getScaleIntervals(scale);
        seqIndex = noteSequence.indexOf(root);
        for (let i = 0; i < intervals.length; i++) {
            seqIndex += intervals[i];
            if (seqIndex >= noteSequence.length) {
                seqIndex = 0;
            }
            notesInScale.push(noteSequence[seqIndex])
        }
        console.log('notes in scale', notesInScale);
    }
    for (let i = 0; i < numStrings; i++) {
        let notesOnString = [];
        seqIndex = noteSequence.indexOf(tuning[i]);
        for (let j = 0; j < numFrets + 1; j++) {
            if (scale) {
                if (notesInScale.includes(noteSequence[seqIndex])) {
                    notesOnString.push(noteSequence[seqIndex]);
                }
                else {
                    notesOnString.push('');
                }
            }
            else {
                notesOnString.push(noteSequence[seqIndex]);

            }
            seqIndex++;
            if (seqIndex === noteSequence.length) {
                seqIndex = 0;
            }
        }
        frets[i] = notesOnString;
    }


    let fretNumbers = [];
    for (let i = 0; i <= numFrets; i++) {
        fretNumbers.push(i.toString());
    }


    return (
        <Box sx={{ width: '80vw', minWidth: '550px', margin: 'auto', borderRadius: 4 }}>

            <div sx={{ width: '100%', borderRadius: 4 }}>
                <String notes={fretNumbers} label />
                <String notes={frets[0]} />
                <String notes={frets[1]} />
                <String notes={frets[2]} />
                <String notes={frets[3]} />
                <String notes={frets[4]} />
                <String notes={frets[5]} />
            </div>
        </Box>
    )
}

export default FretBoard