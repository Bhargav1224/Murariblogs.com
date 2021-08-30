import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { Context } from "../../Context/Context";
import axios from "axios";

export const Login = () => {
	const userRef = useRef();
	const passwordRef = useRef();
// eslint-disable-next-line
	const { dispatch, isFetching, error } = useContext(Context);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		return axios
			.post("https://murariblog.vercel.app/api/auth/login", {
				username: userRef.current.value,
				password: passwordRef.current.value,
			})
			.then((res) => {
				dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
			})
			.catch((er) => {
				dispatch({ type: "LOGIN_FAILURE" });
			});
	};

	// console.log(isFetching);

	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm" onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					className="loginInput"
					type="text"
					placeholder="Enter your Username"
					ref={userRef}
				/>
				<label>Password</label>
				<input
					className="loginInput"
					type="password"
					placeholder="Enter your Password"
					ref={passwordRef}
				/>
				<button className="loginButton" type="submit" disabled={isFetching}>
					Login
				</button>
			</form>
			<button className="loginRegisterButton">
				<Link className="link" to="/register">
					Register
				</Link>
			</button>
		</div>
	);
};
