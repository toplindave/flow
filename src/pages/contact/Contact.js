import React from "react";
import Scroll from "../../components/scroll.js/Scroll";
import "./contact.css";
import Contactform from "./contactform/Contactform";
// import Footer from "../../components/footer/Footer";

function Contact() {
	return (
		<div className="contact">
			<section>
				<div className="section-left"></div>
				<div className="section-right">
					<h1 className="dev">GET IN TOUCH, WE'D LOVE TO HEAR FROM YOU!</h1>
					<Scroll />
					<p>
						If you're interested in working with us or would just like to
						discuss some of your ideas, please complete the form below, send us
						an email or give us a call. We will answer you as soon as possible.
					</p>
				</div>
			</section>
			<section>
				<div className="section-left"></div>
				<div className="section-right con-form">
					<Contactform />
				</div>
			</section>
			<section>
				<div className="section-left"></div>
				<div className="section-contact-3">
					<p className="contact-p">Alternatively, Contact us at:</p>
					<div className="contact-div">
						<div className="address">EMAIL</div>
						<div className="cont-add">greenietec@yahoo.com</div>
					</div>
					<div className="contact-div">
						<div className="address">PHONE</div>
						<div className="cont-add">612 - 518 - 2391</div>
					</div>
					<div className="contact-div">
						<div className="address">ADDRESS</div>
						<div className="cont-add">
							5214 10th Avenue South Minneapolis, MN, 55417
						</div>
					</div>
					<div className="contact-social">
						<div className="contact-img"></div>
						<div className="contact-img"></div>
						<div className="contact-img"></div>
					</div>
				</div>
			</section>
			{/* <Footer /> */}
		</div>
	);
}

export default Contact;
