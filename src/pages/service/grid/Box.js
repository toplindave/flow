import React from "react";
import "./box.css";

function Box(props) {
	return (
		<div className="box">
			<div className="display">
				<div className="asp">
					{/* <div className='ang'></div>
                    <div className='ang'></div>
                    <div className='ang'></div>
                    <div className='ang'></div>
                    <div className='ang'></div>
                    <div className='ang'></div>
                    <div className='ang'></div> */}
				</div>
			</div>
			<div className="box-letter">
				<div className="numbering-card">{props.nub} </div>
				<h2 className="box-header">{props.header}</h2>
				<p className="box-text">{props.desp}</p>
				<button className="box-btn">---</button>
			</div>
		</div>
	);
}

export default Box;
