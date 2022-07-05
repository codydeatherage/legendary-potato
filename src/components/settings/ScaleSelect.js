import React from 'react'
import { styled } from '@mui/system'
import { TextField, Autocomplete } from '@mui/material'

const Container = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'flex',
    '& div': {
        borderColor: 'red',
        backgroundColor: '#372e57',
        color: 'white',
    },
    '& #scale-combo-box': {
        color: 'white',
        backgroundColor: '#372e57',
        width: '150px',
    },
    '#scale-combo-box-label': {
        color: 'white'
    }
})

const ScaleSelect = ({ scales, setActiveScale }) => {

    const handleChange = (event, data) => {
        setActiveScale(scales[data]);
    };

    return (
        <Container>
            <Autocomplete
                disablePortal
                disableClearable
                id='scale-combo-box'
                options={Object.keys(scales)}
                onChange={handleChange}
                sx={{ backgroundColor: '#372e57', color: 'white' }}
                renderInput={(params) =>
                    <TextField
                        id='option'
                        {...params}
                        label='Scale'
                        InputLabelProps={{ className: "autocompleteLabel" }}
                        InputProps={{
                            ...params.InputProps,
                        }}
                    />
                }
            />
        </Container>
    )
}

export default ScaleSelect