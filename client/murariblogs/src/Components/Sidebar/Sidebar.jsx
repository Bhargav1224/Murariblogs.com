import React from "react";
import "./Sidebar.css";
export const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					src="https://bhargavreddykudalaportfolio.vercel.app/images/profile.pic.png"
					alt="profile.png"
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
					necessitatibus nostrum illum reprehenderit.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Music</li>
					<li className="sidebarListItem">Style</li>
					<li className="sidebarListItem">Sport</li>
					<li className="sidebarListItem">Tech</li>
					<li className="sidebarListItem">Movies</li>
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">FOLLOW US</span>
				<div className="sidebarSocial">
					<i className=" sidebarIcon fab fa-facebook-f"></i>
					<i className=" sidebarIcon fab fa-twitter"></i>
					<i className=" sidebarIcon fab fa-pinterest"></i>
					<i className=" sidebarIcon fab fa-instagram"></i>
				</div>
			</div>
		</div>
	);
};
