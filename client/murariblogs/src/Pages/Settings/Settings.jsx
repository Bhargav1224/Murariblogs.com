import React from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import "./Settings.css";

export const Settings = () => {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<span className="settingsDeleteTitle">Delete Your Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt="pp.png"
						/>
						<label htmlFor="fileInput">
							<i className=" settingsPPIcon fas fa-user-circle"></i>
							<input type="file" id="fileInput" style={{ display: "none" }} />
						</label>
					</div>
					<label> Username</label>
					<input type="text" placeholder="Username" />
					<label> Email</label>
					<input type="email" placeholder="abc@gmail.com" />
					<label> Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
};
