import  Tilt from 'react-parallax-tilt';
import brain from './brains.png'
import './logo.css'

function Logo(){
    return (
    <div className='logo-container'>
        <Tilt tilt-scale={2}>
            <div className='logo shadow-3 pa2'>
                <img src={brain}/>
            </div>
        </Tilt>
    </div>
    
    )
}

export default Logo