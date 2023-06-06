import React from "react";
import FooterCard from "./footerBody/FooterCard";
import { Link } from "react-router-dom";
import "./footer.css";
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Instagram } from "./instagram.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";

function Footer() {
	return (
		<section className="footer">
			<div className="section-left footer-side-bar">
				<Link className="footer-logo" to="../">
					greenietec
				</Link>

				<div className="social">
					<h2 className="social-h2">Follow us</h2>
					<ul className="social-links">
						<li className="social-links-li">
							<Link className="social-icon" to="./">
								<Facebook />
							</Link>
						</li>
						<li className="social-links-li">
							<Link className="social-icon" to="./">
								<Instagram />
							</Link>
						</li>
						<li className="social-links-li">
							<Link className="social-icon" to="./">
								<Linkedin />
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="section-right footer-main-body">
				<div className="upper">
					<FooterCard title="Let us team up" text="Hire us" />
					<FooterCard title="Get to know us" text="About us" />
				</div>
				<div className="copyright">
					Copyright © 2023 greenietec software, Inc. All rights reserved.
				</div>

				<div className="mobile-social">
					<h2 className="social-h2">Follow us</h2>
					<ul className="social-links">
						<li className="social-links-li">
							<Link className="social-icon" to="./">
								<Facebook />
							</Link>
						</li>
						<li className="social-links-li">
							<Link className="social-icon" to="./">
								<Instagram />
							</Link>
						</li>
						<li className="social-links-li">
							<Link className="social-icon" to="./">
								<Linkedin />
							</Link>
						</li>
					</ul>
				</div>
				<div className="copyright-mobile">
					Copyright © 2023 greenietec software, Inc. All rights reserved.
				</div>
			</div>
		</section>
	);
}

export default Footer;
