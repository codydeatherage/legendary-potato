import React from 'react'
import { styled } from '@mui/system'
import RootSelect from './RootSelect'
import ScaleSelect from './ScaleSelect'
import TuningSelect from './TuningSelect'

const Container = styled('div')({
    height: '25vh',
    width: 'fit-content',
    padding: 10,
    margin: 'auto',
    borderRadius: '0 0 10px 10px',
    textAlign: 'center',
    backgroundColor: '#003c5c'
})

const Setting = styled('div')({
    width: '100%',
    color: 'white',
    height: '25%',
    minHeight: '50px',

    textAlign: 'center',
    alignItems: 'center',
    justifyItems: 'center'
})

const Settings = ({ setActiveRoot, root, activeScale, setActiveScale, scales, accidental, setAccidental }) =>
    <Container>
        <Setting>
            <RootSelect setActiveRoot={setActiveRoot} root={root} />
        </Setting>
        <Setting sx={{ marginTop: 2 }}>
            <ScaleSelect
                scales={scales}
                accidental={accidental}
                setAccidental={setAccidental}
                activeScale={activeScale}
                setActiveScale={setActiveScale}
            />
        </Setting>
        <Setting>
            <TuningSelect />
        </Setting>
    </Container>

export default Settings