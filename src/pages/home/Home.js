import React from "react";
// import Footer from "../../components/footer/Footer";
// import Scroll from "../../components/scroll.js/Scroll";
import "./home.css";
// import Homeform from "./homeform/Homeform";
// import BackGroundLeft from "../../components/backgroundLeft/BackGroundLeft";
import "./hometab.css";
import "./homemobile.css";
import HomeSection1 from "./homesections/HomeSection1";
import HomeSection2 from "./homesections/HomeSection2";
import HomeSection3 from "./homesections/HomeSection3";
import HomeSection4 from "./homesections/HomeSection4";
import HomeSection5 from "./homesections/HomeSection5";
import HomeSection6 from "./homesections/HomeSection6";

function Home() {
	return (
		<div className="home">
			<HomeSection1 />
			<HomeSection2 />
			<HomeSection3 />
			<HomeSection4 />
			<HomeSection5 />
			<HomeSection6 />

			{/* <Footer /> */}
		</div>
	);
}

export default Home;
