import React from 'react'
import { styled } from '@mui/system'
import { ButtonGroup, Button } from '@mui/material'

const Container = styled('div')({
    width: 'fit-content',
    margin: 'auto',
    height: 'auto',
    flex: 1,
    display: 'flex',
    alignItems: 'center'
})

const Note = styled(Button)(({ active }) => ({
    width: 60,
    height: 60,
    backgroundColor: active && '#fcbf49',
    marginLeft: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: active ? 'black' : '#5c5f63',
    borderColor: '#fcbf49',
    '&:hover': {
        backgroundColor: 'white',
        color: 'black'
    }
}))

const RootSelect = ({ root, setActiveRoot }) => {
    const noteSequence = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    return (
        <Container>
            <p>Root</p>
            <ButtonGroup variant="outlined">
                {noteSequence.map((note, index) =>
                    note === root ?
                        <Note
                            active='true'
                            key={note + index}>{note}
                        </Note>
                        :
                        <Note
                            onClick={() => { setActiveRoot(note) }}
                            key={note + index}>{note}
                        </Note>
                )}
            </ButtonGroup>
        </Container>
    )
}

export default RootSelect