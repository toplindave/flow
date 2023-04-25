import React from "react";
// import Footer from "../../components/footer/Footer";
import Scroll from "../../components/scroll.js/Scroll";
import "./home.css";
import Homeform from "./homeform/Homeform";

function Home() {
	return (
		<div className="home">
			<section>
				<h1 className="dev">DEVELOP EXTRAORDINARY SOFTWARE</h1>

				<p>
					greenieTec deliver secure and scalable web solutions to meet spikes in
					demand. We create essential and memorable websites that grow your
					business. We build fun experiences using cutting edge technologies.
				</p>
				<button>Learn more</button>
			</section>
			<section>
				<h1 className="dev">Customize Software</h1>

				<h2 className="h-2">Driving innovation in business</h2>
				<p>
					Based on your business unique need, goals and requirements. customise
					your business with innovative technologies.
				</p>
				<Scroll />
			</section>
			<section>
				<h1 className="dev">Visual and functional design</h1>

				<h2 className="h-2">Design responsive websites</h2>
				<p>
					Plan and design creative and responsive websites around every page
					objectives with great user experience and works on all digital
					platforms.
				</p>
			</section>
			<section>
				<h1 className="dev">Manage Database</h1>

				<h2 className="h-2">Creating and managing databases.</h2>
				<p>
					We manage data in an organized, efficient, and accessible format and
					maintain the data integrity over time.
				</p>
			</section>
			<section>
				<h1 className="dev">Remove Software bugs</h1>

				<h2 className="h-2">Justify the importance of software testing.</h2>
				<p>
					Evaluate the functionality of a software application to ensure that
					the product is defect-free and produces a high-quality product.
				</p>
			</section>
			<section>
				<div className="flex">
					<h1 className="dev">Let's get started today!</h1>
					<p>
						Share your business goal and we will take care of its entire
						development process. From strategic planning to deployment and
						maintenance.
					</p>
				</div>
				<Homeform />
			</section>
			{/* <Footer /> */}
		</div>
	);
}

export default Home;
