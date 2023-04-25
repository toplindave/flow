import React from 'react'
import './gridcard.css'
import GridData from './GridData';
import Box from './Box';


const DataInfo= (values) =>{
  return (
    <>
      <Box 
        header = {values.header}
        desp ={values.desp}
      />
    </>
  )
}

function Gridcard() {
  return (
    <div className='grid'>
      {GridData.map(DataInfo)}
    </div>
  )
}


export default Gridcard