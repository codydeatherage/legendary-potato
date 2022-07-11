import React from 'react'
import { styled } from '@mui/system'
import { TextField, Autocomplete } from '@mui/material'

const Container = styled('div')({
    width: 'fit-content',
    height: 'auto',
    display: 'flex',
    '& div': {
        backgroundColor: '#fcbf49',
        color: 'black',
        fontWeight: 'bold',
    },
    '& #combo-box': {
        color: 'black',
        fontWeight: 'bold',
        width: '150px',
    },
    '#combo-box-label': {
        color: 'black',
        fontWeight: 'bold',
    },
})

const DropDown = ({ options, handleChange }) =>
    <Container>
        <Autocomplete
            disablePortal
            disableClearable
            id='combo-box'
            options={options}
            onChange={(event, data) => handleChange(event, data)}
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

export default DropDown