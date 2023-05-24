import React from "react";
import Scroll from "../../components/scroll.js/Scroll";
import Gridcard from "./grid/Gridcard";
// import Illustration from "./illustration/Illustration";
import "./services.css";
import { motion } from "framer-motion";

function Services() {
	return (
		<div className="service">
			<section>
				<div className="section-left"></div>
				<div className="section-right">
					<motion.h1
						className="dev"
						initial={{ y: 30, opacity: "0" }}
						whileInView={{ y: 0, opacity: "1" }}
						transition={{ duration: 0.5 }}>
						Applications With Unique Features And Functionalities
					</motion.h1>
					<Scroll />
					<motion.p>
						Businesses small and large need web-based solutions to meet their
						and their client's needs. GreenieTec delivers services that are
						scalable, flexible, and most importantly secure which cut across a
						range of platforms, technologies, and design techniques.
					</motion.p>
				</div>
			</section>
			<section className="service-second-section">
				<div className="section-left"></div>
				<div className="section-right">
					<div className="flex">
						<h1 className="flex-dev">Our Development Process</h1>

						<p className="flex-p">
							GreenieTec is commited to the creation of platforms (website or
							applications) and solutions to boost your visual experience.
						</p>
					</div>
					{/* <Illustration /> */}
				</div>
			</section>
			<section className="sect-grid">
				<div className="section-left"></div>
				<div className="section-right grid-tem">
					<Gridcard />
				</div>
			</section>
		</div>
	);
}

export default Services;
