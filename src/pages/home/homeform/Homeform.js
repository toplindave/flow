import React, { useEffect } from "react";
import "./homeform.css";
import gsap from "gsap";
import { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Homeform() {
	useEffect(() => {
		const form = gsap.timeline({
			scrollTrigger: {
				trigger: ".input-container",
				start: "top 70%",
				toggleActions: "play pause resume reverse",
			},
		});
		form.fromTo(
			".input-container",
			{
				x: "-100%",

				opacity: 0,
			},
			{
				x: "0%",
				duration: 1.3,
				ease: Power4.easeOut,
				opacity: 1,
				stagger: 0.5,
			},
			"start"
		);
		form.fromTo(
			" .btns",
			{
				x: "-200%",

				opacity: 0,
			},
			{
				x: "0%",
				duration: 0.7,
				ease: Power4.easeOut,
				opacity: 1,
				stagger: 0.5,
			},
			"start"
		);
	}, []);
	return (
		<form className="home-form">
			<div className="inp">
				<div className="input">
					<div className="input-container">
						<label htmlFor="name">Full name</label>
						<input name="name" />
					</div>
				</div>

				<div className="input">
					<div className="input-container">
						<label htmlFor="email">Email</label>
						<input name="email" />
					</div>
				</div>
				<div className="input">
					<div className="input-container">
						<label htmlFor="budget">What's your budget</label>
						<select className="pro" name="budget">
							<option value="product"></option>
							<option value="less">less than $1000</option>
							<option value="more">more than $1000</option>
						</select>
					</div>
				</div>
			</div>
			<div className="input">
				<div className="input-container">
					<label htmlFor="text">Tell us a little bit about your project</label>
					<textarea className="text" name="text" />
				</div>
			</div>
			<div className="btn">
				<div className="btn-container" style={{ overflow: "hidden" }}>
					<button className="attach btns">Attach file</button>
				</div>
				<div className="btn-container" style={{ overflow: "hidden" }}>
					<button className="submit btns">Submit</button>
				</div>
			</div>
		</form>
	);
}

export default Homeform;
