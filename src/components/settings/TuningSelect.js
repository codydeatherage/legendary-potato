import React from 'react'
import { styled } from '@mui/system'

const Container = styled('div')({
    width: '100%',
    textAlign: 'left',
    color: 'white',
    height: 'auto',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    minHeight: '60px',
    textAlign: 'center',
    alignItems: 'center'
})

const TuningSelect = () =>{
    return(
        <Container>
            <p>Tuning</p>
        </Container>
    )
}

export default TuningSelect;