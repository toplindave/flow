import React from "react";
import "./spiral.css";
import { ReactComponent as Spiraal } from "./spiraal.svg";
import { ReactComponent as Spiraaal } from "./spiraaal.svg";

function Spiral() {
	return (
		<div className="spiral">
			<Spiraal />
			<Spiraaal />
			{/* <img src="/asset/spiraal.svg" alt="" /> */}
			{/* <img src="/asset/spiraaal.svg" alt="" /> */}
		</div>
	);
}

export default Spiral;
