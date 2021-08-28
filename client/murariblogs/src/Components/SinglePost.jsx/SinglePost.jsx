import React from "react";
import "./SinglePost.css";
export const SinglePost = () => {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					src="https://picsum.photos/200/300"
					alt="singlePost.png"
					className="singlePostImg"
				/>
				<h1 className="singlePostTitle">
					Lorem ipsum dolor
					<div className="singlePostEdit">
						<i className=" singlePostIcon fas fa-edit"></i>
						<i className=" singlePostIcon fas fa-trash"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author : <b>Bhargav Reddy</b>
					</span>
					<span className="singlePostDate">1hr ago </span>
				</div>
				<p className="singlePostDesc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nam
					quos eum facere consequatur beatae vero corporis sunt nostrum officiis
					omnis? Ex illum deleniti vero distinctio inventore ut quidem
					blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nam
					quos eum facere consequatur beatae vero corporis sunt nostrum officiis
					omnis? Ex illum deleniti vero distinctio inventore ut quidem
					blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nam
					quos eum facere consequatur beatae vero corporis sunt nostrum officiis
					omnis? Ex illum deleniti vero distinctio inventore ut quidem
					blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nam
					quos eum facere consequatur beatae vero corporis sunt nostrum officiis
					omnis? Ex illum deleniti vero distinctio inventore ut quidem
					blanditiis.
				</p>
			</div>
		</div>
	);
};
