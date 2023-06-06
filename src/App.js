import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
// import Scroll from './components/scroll.js/Scroll';
import Sidebar from "./components/sidebar/Sidebar";
import Sphere from "./components/sphere/Sphere";
import Spiral from "./components/spiral/Spiral";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Services from "./pages/service/Services";
import { useEffect } from "react";
// import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "auto" });
	}, [pathname]);
	return (
		<div className="App">
			<div>
				<div className="back-g">
					<div className="sphere-bg">
						<Sphere />
					</div>
					<Spiral />
					{/* <Footer /> */}
				</div>
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Services" element={<Services />} />
					<Route path="/About" element={<About />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Projects" element={<Projects />} />
					{/* <Route path="/Footer" element={<Footer />} /> */}
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
