import React from "react";
import FooterCard from "./footerBody/FooterCard";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-side-bar">
				<Link className="footer-logo" to="./">
					greenietec
				</Link>

				<div className="social">
					<h2>Follow us</h2>
					<div className="social-links">
						<Link className="social-icon" to="./">
							face
						</Link>
						<Link className="social-icon" to="./">
							insta
						</Link>
						<Link className="social-icon" to="./">
							linked
						</Link>
					</div>
				</div>
			</div>
			<div className="footer-main-body">
				<FooterCard title="Let us team up" text="Hire us" />
				<FooterCard title="Get to know us" text="About us" />
				<div className="copyright">
					Copyright © 2023 greenietec software, Inc. All rights reserved.
				</div>
			</div>
		</div>
	);
}

export default Footer;
