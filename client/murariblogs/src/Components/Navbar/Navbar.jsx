import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
export const Navbar = () => {
	const { user, dispatch } = useContext(Context);
	const handleLogout = () => {
		dispatch({
			type: "LOGOUT",
		});
	};

	const PF = "http://localhost:8000/Images/";

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
					<li className="topListItem">
						<Link to="/" className="link">
							HOME
						</Link>
					</li>
					<li className="topListItem">
						<Link to="/about" className="link">
							ABOUT
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/contact">
							CONTACT
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/write">
							WRITE
						</Link>
					</li>
					<li className="topListItem" onClick={handleLogout}>
						{user && "LOGOUT"}
					</li>
				</ul>
			</div>
			<div className="topright">
				{user ? (
					<Link to="/settings">
						<img className="topImage" src={PF+user.profilePic} alt="profile.png" />
					</Link>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link className="link" to="/login">
								LOGIN
							</Link>
						</li>

						<li className="topListItem">
							<Link className="link" to="/register">
								REGISTER
							</Link>
						</li>
					</ul>
				)}

				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
};
