import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./box.css";
import gsap from "gsap";
import { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Box(props) {
	useEffect(() => {
		const box = gsap.timeline({
			scrollTrigger: {
				trigger: ".box",
				// markers: true,
				start: "top 95%",
				toggleActions: "play pause resume reverse",
			},
		});
		box.fromTo(
			".box",
			{
				x: "-100%",

				opacity: 0,
			},
			{
				x: "0%",
				duration: 1.4,
				ease: Power4.easeOut,
				opacity: 1,
				stagger: 0.5,
			}
		);
		const text = gsap.timeline({
			scrollTrigger: {
				trigger: ".box",
				// markers: true,
				start: "top 95%",
				toggleActions: "play pause resume reverse",
			},
			// delay: 0.5,
		});
		text.fromTo(
			".asp",
			{
				y: "100%",

				opacity: 0,
			},
			{ y: "0%", duration: 1, ease: Power4.easeOut, opacity: 1, stagger: 1 },
			"start"
		);
		text.fromTo(
			".bxx-hdd",
			{
				y: "100%",

				opacity: 0,
			},
			{ y: "0%", duration: 1, ease: Power4.easeOut, opacity: 1, stagger: 1 },
			"start"
		);
		text.fromTo(
			".bxx-txt",
			{
				y: "100%",

				opacity: 0,
			},
			{
				y: "0%",
				duration: 1,
				ease: Power4.easeOut,
				opacity: 1,
				stagger: 1,
			},
			0.5
		);
	}, []);
	return (
		<div className="box" style={{ overflow: "hidden" }}>
			<div className="box-container">
				<div className="display" style={{ overflow: "hidden" }}>
					<div className="asp">{props.image}</div>
				</div>
				<div className="box-letter">
					<div className="numbering-card">{props.nub} </div>
					<h2 className="box-header" style={{ overflow: "hidden" }}>
						<div className="bxx-hdd">{props.header}</div>
					</h2>
					<p className="box-text" style={{ overflow: "hidden" }}>
						<div className="bxx-txt">{props.desp}</div>
					</p>
					<Link className="box-btn">
						<div className="rotated-square">
							<div className="line-container">
								<div className="arrow-line"></div>
								<div className="right-angle"></div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Box;
