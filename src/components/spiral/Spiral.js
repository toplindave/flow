import React from 'react'
// import {ReactComponent as SpiralGreen} from './spiraaal.svg'
// import {ReactComponent as SpiralBrown} from './spiraal.svg'
// import spiraaal from 'asset/spiraaal.svg'
import './spiral.css'

function Spiral() {
  return (
    <div className='spiral'>
         <img src='/asset/spiraal.svg' alt=''/>
         <img src='/asset/spiraaal.svg' alt=''/>
        {/* <SpiralGreen/>
        <SpiralBrown/> */}
    </div>
  )
}

export default Spiral