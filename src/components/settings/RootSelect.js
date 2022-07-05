import React from 'react'
import { styled } from '@mui/system'

const Container = styled('div')({
    width: '100%',
    textAlign: 'left',
    color: 'white',
    height: 'auto',
    flex: 1,
    display: 'flex',
    alignItems: 'center'
})

const Note = styled('div')(({ active }) => ({
    width: active ? '60px' : '40px',
    borderRadius: '50%',
    height: active ? '60px' : '40px',
    backgroundColor: active ? '#2d6939' : '#6242c9',
    marginLeft: '2%',
    textAlign: 'center',
    lineHeight: active ? '60px' : '40px',
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