import React, { useEffect } from "react";
import "../home.css";
import Scroll from "../../../components/scroll.js/Scroll";
import gsap from "gsap";
import { Power4 } from "gsap";

function HomeSection1() {
	useEffect(() => {
		const tl = gsap.timeline({ delay: 0.3 });
		tl.fromTo(
			".devh1",
			{
				y: 120,
			},
			{
				y: 0,
				duration: 1.3,
				ease: Power4.easeOut,
			}
		);
		tl.fromTo(
			".devp",
			{
				y: 120,
			},
			{
				y: 0,
				duration: 1,
				ease: Power4.easeOut,
			},
			0.2
		);
	}, []);

	return (
		<>
			<section className="home-section">
				<div className="section-left"></div>
				<div className="section-right">
					<h1 className="dev">
						<div className="devh1"> DEVELOP EXTRAORDINARY SOFTWARE</div>
					</h1>
					<Scroll />

					<p>
						<div className="devp">
							greenieTec deliver secure and scalable web solutions to meet
							spikes in demand. We create essential and memorable websites that
							grow your business. We build fun experiences using cutting edge
							technologies.
						</div>
					</p>
					<div className="learn-more-container" style={{ overflowY: "hidden" }}>
						<button className="learn-more-btn">Learn more</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default HomeSection1;
