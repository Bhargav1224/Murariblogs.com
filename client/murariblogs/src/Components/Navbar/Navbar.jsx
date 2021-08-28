import React from "react";
import "./Navbar.css";
export const Navbar = () => {
	return (
		<div className="top">
			<div className="topleft">
                <i className=" topIcon fab fa-facebook-f"></i>
				<i className=" topIcon fab fa-twitter"></i>
                <i className=" topIcon fab fa-pinterest"></i>
                <i className=" topIcon fab fa-instagram"></i>
			</div>
            <div className="topcenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
			</div>
            <div className="topright">
                <img className="topImage" src="https://bhargavreddykudalaportfolio.vercel.app/images/profile.pic.png" alt="profile.png" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
		</div>
	);
};
