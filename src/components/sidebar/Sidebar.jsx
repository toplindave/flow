import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";
// import logo from '../public/asset/logo.svg'
import { ReactComponent as SvgIcon } from "./logo.svg";
import Menubar from "../menubar/Menubar";

function Sidebar() {
	const [toggle, setToggle] = useState(false);
	const closeMobileMenu = () => setToggle(false);
	const handleToggle = () => {
		setToggle(!toggle);
	};
	return (
		<div className="sidebar">
			<Link className="logo" to="./" onClick={closeMobileMenu}>
				<div className="logo-pic">
					<SvgIcon />
				</div>
				<div className="logo-text">greenietec software</div>
			</Link>
			<div className="navbar">
				<ul>
					<li>
						<NavLink to="./Services" onClick={closeMobileMenu}>
							Services
						</NavLink>
					</li>
					<li>
						<NavLink to="./Projects" onClick={closeMobileMenu}>
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink to="./About" onClick={closeMobileMenu}>
							About us
						</NavLink>
					</li>
					<li>
						<NavLink to="./Contact" onClick={closeMobileMenu}>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="menu-bar" onClick={handleToggle}>
				<Menubar />
			</div>
			{/* <div className={toggle ? "mobile-nav " : "navbar"}> */}
			<div className="mobile-nav">
				<ul>
					<li>
						<NavLink to="./Services" onClick={closeMobileMenu}>
							Services
						</NavLink>
					</li>
					<li>
						<NavLink to="./Projects" onClick={closeMobileMenu}>
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink to="./About" onClick={closeMobileMenu}>
							About us
						</NavLink>
					</li>
					<li>
						<NavLink to="./Contact" onClick={closeMobileMenu}>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Sidebar;
