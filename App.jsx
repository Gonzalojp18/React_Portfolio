import Header from './src/components/Header'
import Nav from './src/components/Nav'
import MainTitle from './src/components/MainTitle'
import Rrss from './src/components/Rrss'
import DOTS from 'vanta/src/vanta.dots'
import { useEffect } from 'react'


function App() {

    useEffect(function () {
        DOTS({
            el: '#vanta',
            scale: 1,
            scaleMobile: 0.6,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 400.00,
            minWidth: 400.00,
            amplitudeFactor: 4,
            xOffset: 6,
            yOffset: -0.10,
            color: 0xcad6dd,
            color2: 0xFD2155,
            backgroundColor: 0x152b3c
        })
    }, [])


    return (
        <div>
            <div className='vanta' id='vanta'>
                <Header />
                <Nav />
                <MainTitle />
                <Rrss></Rrss>
            </div>
        </div>
    )
}


export default App