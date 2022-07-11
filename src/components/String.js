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
    color: label ? 'black' : 'white',
    borderLeft: label ? 'none' : '3px solid #FCBF49',
    borderRight: label ? 'none' : '3px solid #FCBF49',
    zIndex: 99,
    padding: '2px',
}))

const StringDecoration = styled('div')(({ sm }) => ({
    position: 'absolute',
    height: '35%',
    top: 0,
    width: '100%',
    borderBottom: sm ? '3px solid #FCBF49' : '6px solid #FCBF49',
    zIndex: 0,
}))


const Note = styled('div')(({ label, root, active }) => ({
    borderRadius: '40px',
    width: label ? '100%' : '30px',
    height: '30px',
    backgroundColor: label ? '#432818' : (root ? 'white' : (active ? '#D62828' : '#002649')),
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: '30px',
    margin: 'auto',
    color: root ? 'black' : active || label ? 'white' : '#5c5f63',
    '&:hover': {
        backgroundColor: '#fcbf49',
        width: label ? '100%' : '30px',
        height: '30px',
        color: active || label ? 'black' : 'gray'
    }
}))

const String = ({ notes, label, index, root, scale }) =>
    <Row>
        {!label && <StringDecoration sm={index <= 2} />}
        {notes.map((note) =>
            <Fret label={label}>
                {scale && scale.includes(note) ?
                    <Note label={label} root={note === root} active='true'>{note}</Note>
                    :
                    <Note label={label}>{note}</Note>
                }
            </Fret>
        )}
    </Row>

export default String