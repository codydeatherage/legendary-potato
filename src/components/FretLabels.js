import React from 'react';
import { styled } from '@mui/system';

const Row = styled('div')({
    width: '70vw',
    margin: 'auto',
    display: 'flex',

})

const Label = styled('div')({
    flex: 1,
    width: 'max-content',
    height: '30px',
    color: 'gray',
    zIndex: 99,
    padding: '2px',
})

const FretLabels = ({labels}) => {
    return (
        <Row>
            {labels.map((label, index) => 
                <Label>{index}</Label>
            )}
        </Row>
    )
}

export default FretLabels