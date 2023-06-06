import React, { useEffect } from "react";
import "../home.css";
import gsap from "gsap";
import { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HomeSection2() {
	useEffect(() => {
		gsap.fromTo(
			".sldh",
			{
				y: 100,
				opacity: 0,
			},
			{
				y: 0,
				duration: 1,
				opacity: 1,
				ease: Power4.easeOut,
				scrollTrigger: {
					trigger: ".sldh",
					// markers: true,
					start: "top 70%",
					toggleActions: "play pause resume reverse",
				},
			}
		);
		gsap.fromTo(
			".sldh2",
			{
				y: 100,
				opacity: 0,
			},
			{
				y: 0,
				duration: 1,
				opacity: 1,
				ease: Power4.easeOut,
				scrollTrigger: {
					trigger: ".sldh2",
					// markers: true,
					start: "top 100% center 90%",
					toggleActions: "play pause resume reverse",
				},
			}
		);
		gsap.fromTo(
			".sldp",
			{
				y: 100,
				opacity: 0,
			},
			{
				y: 0,
				duration: 1,
				opacity: 1,
				ease: Power4.easeOut,
				scrollTrigger: {
					trigger: ".sldh2",
					// markers: true,
					start: "top 90% ",
					toggleActions: "play pause resume reverse",
				},
			}
		);
	}, []);
	return (
		<>
			<section className="home-section">
				<div className="section-left"></div>
				<div className="section-right">
					<h1 className="dev">
						<div className="sldh">Customize Software</div>
					</h1>

					<h2 className="h-2">
						<div className="sldh2">Driving innovation in business</div>
					</h2>
					<p className="home-p">
						<div className="sldp">
							Based on your business unique need, goals and requirements.
							customise your business with innovative technologies.
						</div>
					</p>
				</div>
			</section>
		</>
	);
}

export default HomeSection2;
