import React from 'react'
import { Navbar } from "../Components/Navbar/Navbar";
import { Settings } from "../Pages/Settings/Settings";
import { Home } from "../Pages/Home/Home";
import { Single } from "../Pages/Single/Single";
import { Write } from "../Pages/Write/Write";
import { Switch,Route } from "react-router-dom";
import { Register } from "../Pages/Register/Register";
import { Login } from "../Pages/Login/Login";
export const Router = () => {
    return (
        <div>
            <Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/write">
					<Write />
				</Route>
				<Route path="/settings">
					<Settings />
				</Route>
				<Route path="/post/:postId">
					<Single />
				</Route>
			</Switch>
        </div>
    )
}
