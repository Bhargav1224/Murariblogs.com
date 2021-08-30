import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	const [cats, setCats] = useState([]);

	const getCats = () => {
		return axios
			.get("https://murariblog.vercel.app/api/categories")
			.then((res) => {
				// console.log(res.data);
				setCats(res.data);
			})
			.catch((er) => {});
	};
	useEffect(() => {
		getCats();
	}, []);
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					src="https://bhargavreddykudalaportfolio.vercel.app/images/profile.pic.png"
					alt="profile.png"
				/>
				<p className="sidebarDesc">
					I've always been Passionated about programming and creating things and
					I've found a great way to channel my creativity through web
					development.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					{cats.map((item) => (
						<Link to={`/?cat=${item.name}`} className="link">
							<li key={item._id} className="sidebarListItem">
								{item.name}
							</li>
						</Link>
					))}
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
