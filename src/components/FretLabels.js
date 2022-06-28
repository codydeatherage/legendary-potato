import React from 'react';
import { styled } from '@mui/system';

const Row = styled('div')({
    width: '80vw',
    margin: 'auto',
    display: 'flex',
    minWidth: '550px',

})

const Label = styled('div')({
    // color: 'white',
    
    // textAlign: 'center',
    // zIndex: 99,

    borderRadius: '40px',
    height: '25px',
    width: '100%',
    backgroundColor: 'white',
    textAlign: 'center',
    margin: 'auto'
})

const LabelContainer = styled('div')({
    flex: 1,
    height: '30px',
    borderLeft: '2px solid green',
    borderRight: '2px solid green',
    zIndex: 99,
    
})

const FretLabels = ({ labels }) => {
    return (
        <Row>
            {labels.map((label, index) =>
                <LabelContainer>
                    <Label>{index}</Label>
                </LabelContainer>
            )}
        </Row>
    )
}

export default FretLabels