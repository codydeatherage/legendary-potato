import React from 'react';
import { styled } from '@mui/system';

const Row = styled('div')({
    position: 'relative',
    width: '100%',
    display: 'flex',

})

const Fret = styled('div')(({ label }) => ({
    flex: 1,
    height: '30px',
    color: label ? 'white' : 'red',
    borderLeft: label ? 'none' : '2px solid green',
    borderRight: label ? 'none' : '2px solid green',
    zIndex: 99,
    padding: '2px',
}))

const ThinString = styled('div')({
    position: 'absolute',
    height: '35%',
    top: 0,
    width: '100%',
    borderBottom: '1px solid white',
    zIndex: 0,
})

const Note = styled('div')(({ label }) => ({
    borderRadius: '40px',
    width: label ? '100%' : '25px',
    height: '25px',
    backgroundColor: label ? 'gray' : 'orange',
    textAlign: 'center',
    margin: 'auto',
    '&:hover':{
        backgroundColor:'yellow',
        color: 'black'
    }
}))

const String = ({ notes, label }) => {
    return (
        <Row>
            {!label && <ThinString />}
            {notes.map((note) =>
                <Fret label={label}>
                    {note !== '' && <Note label={label}> {note}</Note>}
                </Fret>
            )}
        </Row>
    )
}

export default String