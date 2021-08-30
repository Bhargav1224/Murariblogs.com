import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
export const Post = ({ post }) => {
	//public folder
	const PF = "http://localhost:8000/Images/";

	return (
		<div className="post" key={post._id}>
			{post.photo && (
				<img className="postImg" src={PF + post.photo} alt="post.png" />
			)}
			<div className="postInfo">
				<div className="postCats">
					{post.categories?.map((item) => (
						<span key={item._id} className="postCats">
							{item.name}
						</span>
					))}
				</div>
				<Link className="link" to={`/post/${post._id}`}>
					<span className="postTitle">{post.title}</span>
				</Link>
				<hr />
				<span className="postDate">
					{new Date(post.createdAt).toDateString()}
				</span>
			</div>
			<p className="postDesc">{post.desc}</p>
		</div>
	);
};
