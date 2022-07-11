import React from 'react'
import { Box } from '@mui/material'
import String from './String'

const FretBoard = ({ numStrings, numFrets, tuning, root, scale }) => {
    const noteSequence = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    let frets = [];
    let seqIndex = 0;
    let notesInScale = [root];
    if (scale) {
        seqIndex = noteSequence.indexOf(root);
        for (let i = 0; i < scale.intervals.length; i++) {
            seqIndex += scale.intervals[i];
            if (seqIndex >= noteSequence.length) {
                seqIndex = seqIndex - noteSequence.length;
            }
            notesInScale.push(noteSequence[seqIndex])
        }
    }
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

    let fretNumbers = [];
    for (let i = 0; i <= numFrets; i++) {
        fretNumbers.push(i.toString());
    }

    return (
        <Box sx={{ width: '80vw', minWidth: '550px', margin: 'auto', borderRadius: 4 }}>
            <Box sx={{ width: '100%', borderRadius: 4 }}>
                <String notes={fretNumbers} label='true' />
                {
                    frets.map((notes, index) =>
                        <String notes={notes} scale={notesInScale} key={notes[0] + index} root={root} index={index} />
                    )
                }
            </Box>
        </Box>
    )
}

export default FretBoard