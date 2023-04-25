import React from "react";
import Footer from "../../components/footer/Footer";
import Scroll from "../../components/scroll.js/Scroll";
import Gridcard from "./grid/Gridcard";
import Illustration from "./illustration/Illustration";
import "./services.css";

function Services() {
	return (
		<div className="hold">
			<div className="service">
				<section>
					<h1 className="dev">
						Applications With Unique Features And Functionalities
					</h1>

					<p>
						Businesses small and large need web-based solutions to meet their
						and their client's needs. GreenieTec delivers services that are
						scalable, flexible, and most importantly secure which cut across a
						range of platforms, technologies, and design techniques.
					</p>
					<Scroll />
				</section>
				<section className="service-second-section">
					<div className="flex">
						<h1 className="dev">Our Development Process</h1>

						<p>
							GreenieTec is commited to the creation of platforms (website or
							applications) and solutions to boost your visual experience.
						</p>
					</div>
					<Illustration />
				</section>
				<section className="grid">
					<Gridcard />
				</section>
			</div>
			<Footer />
		</div>
	);
}

export default Services;
