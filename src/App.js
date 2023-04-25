import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Footer from "./components/footer/Footer";
// import Scroll from './components/scroll.js/Scroll';
import Sidebar from "./components/sidebar/Sidebar";
import Sphere from "./components/sphere/Sphere";
import Spiral from "./components/spiral/Spiral";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Services from "./pages/service/Services";

function App() {
	return (
		<div className="App">
			<div className="back-g">
				<Sphere />
				<Spiral />
				<Sidebar />
				{/* <Footer /> */}
			</div>

			{/* <Scroll/> */}
			{/* <div className='blank'/> */}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Services" element={<Services />} />
				<Route path="/About" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/Projects" element={<Projects />} />
			</Routes>
		</div>
	);
}

export default App;
