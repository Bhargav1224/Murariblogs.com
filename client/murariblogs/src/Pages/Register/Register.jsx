import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const init = {
	username: "",
	email: "",
	password: "",
};
export const Register = () => {
	const [regData, setRegData] = useState(init);

	// eslint-disable-next-line
	const [error, setError] = useState(false);

	const { username, email, password } = regData;

	const history = useHistory();

	const handleChange = (e) => {
		let { name, value } = e.target;
		setRegData({ ...regData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const payload = {
			username,
			email,
			password,
		};
		setError(false);
		return axios
			.post("https://murariblog.vercel.app/api/auth/register", payload)
			.then((res) => {
				res.data && history.push("/login");
			})
			.catch((er) => setError(true));

		// console.log(payload);
	};

	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm" onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					type="text"
					className="registerInput"
					placeholder="Enter your username..."
					name="username"
					value={username}
					onChange={handleChange}
				/>
				<label>Email</label>
				<input
					type="text"
					className="registerInput"
					placeholder="Enter your email..."
					name="email"
					value={email}
					onChange={handleChange}
				/>
				<label>Password</label>
				<input
					type="password"
					className="registerInput"
					placeholder="Enter your password..."
					name="password"
					value={password}
					onChange={handleChange}
				/>
				<button className="registerButton" type="submit">
					Register
				</button>
			</form>
			<button className="registerLoginButton">
				<Link className="link" to="/login">
					Login
				</Link>
			</button>
			{error && <span className="error">Something went wrong!</span>}
		</div>
	);
};
