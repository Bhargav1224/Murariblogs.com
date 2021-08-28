import React from "react";
import "./Post.css";
export const Post = () => {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://picsum.photos/200/300"
				alt="post.png"
			/>
			<div className="postInfo">
				<div className="postCats">
					<span className="postCats">Music</span>
					<span className="postCats">Life</span>
				</div>
				<span className="postTitle">
					Bhargav reddy kudala is a full stack developer
				</span>
				<hr />
				<span className="postDate">1 hr ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
				necessitatibus nostrum illum reprehenderit. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum
				reprehenderit.
			</p>
		</div>
	);
};
