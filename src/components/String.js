import React from 'react';
import { styled } from '@mui/system';

const Row = styled('div')({
    position: 'relative',
    width: '100%',
    display: 'flex',

})

const Fret = styled('div')({
    flex: 1,
    width: 'max-content',
    height: '30px',
    color: 'red',
    borderLeft: '2px solid green',
    borderRight: '2px solid green',
    zIndex: 99,
    padding: '2px',
})

const ThinString = styled('div')({
    position: 'absolute',
    height: '35%',
    top: 0,
    width: '100%',
    borderBottom: '1px solid white',
    zIndex: 0,
})

const Note = styled('div')({
    borderRadius: '40px',
    width: '25px',
    height: '25px',
    backgroundColor: 'orange',
    textAlign: 'center',
    margin: 'auto'
})

const String = ({ notes }) => {
    console.log(notes)
    return (
        <Row>
            <ThinString />
            {notes.map((note) =>
                <Fret>
                    <Note> {note}</Note>

                </Fret>
            )}
        </Row>
    )
}

export default String