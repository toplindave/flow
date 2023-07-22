import React, { useEffect } from "react";
import "./projectcard.css";
import gsap from "gsap";
import { Power4 } from "gsap";

function ProjectCard(props) {
	useEffect(() => {
		const ser = gsap.timeline({ delay: 0.3 });
		ser.fromTo(
			".project-card-container",
			{
				x: "-100%",

				// opacity: 0,
			},
			{
				x: " 0%",
				duration: 1,
				ease: Power4.easeOut,
				stagger: 0.3,
			}
		);
	}, []);
	return (
		<div className="ProjectCard" style={{ overflow: "hidden" }}>
			<div className="project-card-container">
				<div className="card-number">{props.number}</div>
				<h1 className="card-title"> {props.title} </h1>
				<div className="card-picture"> {props.src} </div>
			</div>
		</div>
	);
}

export default ProjectCard;
