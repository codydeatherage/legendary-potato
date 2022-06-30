import React, { useState } from 'react'
import { styled } from '@mui/system'
import { Box, TextField, MenuItem, Autocomplete, Select, Input } from '@mui/material'

const Container = styled('div')({
    width: '100%',

    height: 'auto',
    display: 'flex',
    '& div': {
        borderColor: 'red',
        backgroundColor: '#372e57',
        color: 'white',
        // '&:hover':{
        //     backgroundColor: '#472e57'
        // },
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

const ScaleSelect = ({ activeScale, setActiveScale }) => {
    const [scale, setScale] = useState('');
    const scales = ['Major', 'Minor'];

    const handleChange = (event, data) => {
        console.log(data);
        setActiveScale(data);
    };

    return (
        <Container>
            <Autocomplete
                disablePortal
                disableClearable
                id='scale-combo-box'
                options={scales}
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
            {/* <TextField
                id='scale-select'
                defaultValue={scale}
                label='scale'
                select
                onChange={handleChange}
            >
                <MenuItem val={'major'}>Major</MenuItem>
                <MenuItem val={'minor'}>Minor</MenuItem>
            </TextField> */}
        </Container>

    )
}

export default ScaleSelect