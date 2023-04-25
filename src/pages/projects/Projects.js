import React from "react";
import Scroll from "../../components/scroll.js/Scroll";
import "./project.css";
import ProjectCards from "./projectcards/ProjectCards";

function Projects() {
	return (
		<div className="project">
			<Scroll />
			<ProjectCards />
		</div>
	);
}

export default Projects;
