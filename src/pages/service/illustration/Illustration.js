import React from 'react';
import './illustration.css';

function Illustration() {
   
  return (
    <div className='illustration'>
        <div className='tran'>
            <ParentBox text='Plan'/>
            <ParentBox text='Discover'/>
            <ParentBox text='Continuous feedback'/>
            <ParentBox text='Observe'/>
            <ParentBox text='Operate'/>
            <ParentBox text='Deploy'/>
            <ParentBox text='Test'/>
            <ParentBox text='Build'/>
            <div className='box-line'/>
            {/* <div className='box-line'/>
            <div className='box-line'/>
            <div className='box-line'/>
            <div className='box-line'/>
            <div className='box-line'/> */}
        </div>
        {/* <div className='bx-line'>
            <div className='box-line'/>
        </div> */}
    </div>
  )
}
 const ParentBox = (props) => {
    return(
        <div className='ill-box'>
            <p>{props.text}</p>
            <div className='box-circle'>
                {props.src}
            </div>
        </div>
    )
 }
export default Illustration