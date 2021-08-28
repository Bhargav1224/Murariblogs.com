import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Settings } from "../Pages/Settings/Settings";
import { Home } from "../Pages/Home/Home";
import { Single } from "../Pages/Single/Single";
import { Write } from "../Pages/Write/Write";
import { Switch, Route } from "react-router-dom";
import { Register } from "../Pages/Register/Register";
import { Login } from "../Pages/Login/Login";
export const Router = () => {
	const user = false;
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/register">{user ? <Home /> : <Register />}</Route>
				<Route path="/login">{user ? <Home /> : <Login />}</Route>
				<Route path="/write">{user ? <Write /> : <Register />}</Route>
				<Route path="/settings">{user ? <Settings /> : <Register />}</Route>
				<Route path="/post/:postId">
					<Single />
				</Route>
			</Switch>
		</div>
	);
};
