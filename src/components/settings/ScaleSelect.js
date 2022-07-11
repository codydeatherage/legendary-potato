import React from 'react'
import { styled } from '@mui/system'
import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material'
import DropDown from './DropDown'

const Container = styled('div')({
    width: 'fit-content',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    '& #toggle': {
        '& button': {
            color: 'white',
            width: '60px',
            fontSize: '20px',
            border: '1px solid black',
        },
        '& .Mui-selected':{
            backgroundColor: '#372e57'
        }
    },
    '& p': {
        margin: 'auto 10px'
    }
})

const ScaleSelect = ({ scales, setActiveScale, accidental, setAccidental }) => {

    const handleChange = (event, data) => {
        setActiveScale(scales[data]);
    }

    const handleToggle = (event) => {
        if (event.target.value !== accidental) {
            setAccidental(event.target.value)
        }
    }

    return (
        <Container>
            <DropDown
                options={Object.keys(scales)}
                handleChange={handleChange}
            />
            <p>Accidental</p>
            <ToggleButtonGroup
                id='toggle'
                exclusive
                value={accidental}
                onChange={(e) => handleToggle(e)}
                sx={{/*   */ color: 'white' }}
            >
                <ToggleButton value='sharp'>{'♯'}</ToggleButton>
                <ToggleButton value='flat'>{'♭'}</ToggleButton>
            </ToggleButtonGroup>

        </Container>
    )
}

export default ScaleSelect