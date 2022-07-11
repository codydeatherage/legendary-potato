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
    width: active ? '60px' : '50px',
    borderRadius: '100%',
    height: active ? '60px' : '50px',
    backgroundColor: active ? '#2d6939' : '#6242c9',
    marginLeft: 10 ,
    textAlign: 'center',
    lineHeight: active ? '60px' : '50px',
    fontWeight: 'bold',
    fontSize: active ? '30px' : '20px',
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
{/*             <ButtonGroup variant="outlined">
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
            </ButtonGroup> */}
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
        </Container>
    )
}

export default RootSelect