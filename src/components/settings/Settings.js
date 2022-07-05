import React from 'react'
import { styled } from '@mui/system'
import RootSelect from './RootSelect'
import ScaleSelect from './ScaleSelect'

const Container = styled('div')({
    height: '25vh',
    width: '80vw',
    border: '2px solid #3b1a59',
    padding: 10,
    margin: 'auto',
    borderRadius: 4,
})

const Setting = styled('div')({
    width: '100%',
    textAlign: 'left',
    color: 'white',
    height: '25%',
})

const Settings = ({ setActiveRoot, root, activeScale, setActiveScale, scales }) => {
    return (
        <Container>
            <Setting>
                <RootSelect setActiveRoot={setActiveRoot} root={root} />
            </Setting>
            <Setting sx={{ marginTop: 2 }}>
                <ScaleSelect
                    scales={scales}
                    activeScale={activeScale}
                    setActiveScale={setActiveScale}
                />
            </Setting>
            {/*             <Setting>Scale</Setting>
            <Setting>Tuning</Setting> */}
        </Container>
    )
}

export default Settings