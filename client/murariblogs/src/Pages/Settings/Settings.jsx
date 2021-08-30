import React, { useContext, useState } from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Context } from "../../Context/Context";
import "./Settings.css";
import axios from "axios";

export const Settings = () => {
	const { user, dispatch } = useContext(Context);
	const [file, setFile] = useState(null);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [update, setUpdate] = useState(false);

	const PF = "https://murariblog.vercel.app/Images/";

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "UPDATE_START" });
		const updatedUser = {
			userId: user._id,
			username,
			email,
			password,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			updatedUser.profilePic = filename;
			try {
				await axios.post("https://murariblog.vercel.app/api/upload", data);
			} catch (err) {
				console.log(err);
			}
		}
		try {
			const res = await axios.put(
				`https://murariblog.vercel.app/api/users/${user._id}`,
				updatedUser
			);
			setUpdate(true);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (err) {
			dispatch({ type: "UPDATE_FAILURE" });
		}
	};

	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<span className="settingsDeleteTitle">Delete Your Account</span>
				</div>
				<form className="settingsForm" onSubmit={handleSubmit}>
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src={file ? URL.createObjectURL(file) : PF + user.profilePic}
							alt="profile.png"
						/>
						<label htmlFor="fileInput">
							<i className=" settingsPPIcon fas fa-user-circle"></i>
							<input
								type="file"
								id="fileInput"
								style={{ display: "none" }}
								onChange={(e) => setFile(e.target.files[0])}
							/>
						</label>
					</div>
					<label> Username</label>
					<input
						type="text"
						placeholder={user.username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<label> Email</label>
					<input
						type="email"
						placeholder={user.email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label> Password</label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="settingsSubmit" type="submit">
						Update
					</button>
					{update && <span className="update">Profile has been updated </span>}
				</form>
			</div>
			<Sidebar />
		</div>
	);
};
