import React from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { SinglePost } from "../../Components/SinglePost.jsx/SinglePost";
import "./Single.css";
export const Single = () => {
	return (
		<div className="single">
            {/* post */}
            <SinglePost/>
			<Sidebar />
		</div>
	);
};
