import React from 'react'
import { styled } from '@mui/system'
import { TextField, Autocomplete } from '@mui/material'

const Container = styled('div')({
    width: 'fit-content',
    height: 'auto',
    display: 'flex',
    '& div': {
        backgroundColor: '#372e57',
        color: 'white',
    },
    '& #combo-box': {
        color: 'white',
        backgroundColor: '#372e57',
        width: '150px',
    },
    '#combo-box-label': {
        color: 'white'
    }
})

const DropDown = ({options, handleChange}) =>{ 
   
        return (
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
        )
    }
    
    export default DropDown