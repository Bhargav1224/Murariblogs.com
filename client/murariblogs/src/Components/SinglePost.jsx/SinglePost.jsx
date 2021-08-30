import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./SinglePost.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

export const SinglePost = () => {
	const { postId } = useParams();

	const [post, setPost] = useState({});
	const PF = "https://murariblog.vercel.app/Images/";

	const { user } = useContext(Context);

	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);

	const history = useHistory();

	const fetchSinglePost = () => {
		return axios
			.get(`https://murariblog.vercel.app/api/posts/${postId}`)
			.then((res) => {
				setPost(res.data);
				setTitle(res.data.title);
				setDesc(res.data.desc);
			})
			.catch((er) =>{});
	};

	const handleDelete = () => {
		return axios
			.delete(`https://murariblog.vercel.app/api/posts/${postId}`, {
				data: {
					username: user.username,
				},
			})
			.then((res) => {
				history.push("/");
			})
			.catch((er) => console.log(er));
	};

	const handleUpdate = () => {
		return axios
			.put(`https://murariblog.vercel.app/api/posts/${postId}`, {
				username: user.username,
				title,
				desc,
			})
			.then((res) => {
				setUpdateMode(false);
			})
			.catch((er) => console.log(er));
	};

	useEffect(() => {
		fetchSinglePost();
		// eslint-disable-next-line
	}, [postId]);

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{post.photo && (
					<img
						src={PF + post.photo}
						alt="singlePost.png"
						className="singlePostImg"
					/>
				)}
				{updateMode ? (
					<input
						type="text"
						value={title}
						className="singlePostTitleInput"
						onChange={(e) => setTitle(e.target.value)}
						autoFocus
					/>
				) : (
					<h1 className="singlePostTitle">
						{title}
						{post.username === user?.username && (
							<div className="singlePostEdit">
								<i
									className=" singlePostIcon fas fa-edit"
									onClick={() => setUpdateMode(true)}
								></i>
								<i
									className=" singlePostIcon fas fa-trash"
									onClick={handleDelete}
								></i>
							</div>
						)}
					</h1>
				)}
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author :
						<Link to={`/?user=${post.username}`} className="link">
							<b>{post.username}</b>
						</Link>
					</span>
					<span className="singlePostDate">
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				{updateMode ? (
					<textarea
						type="text"
						className="singlePostDescInput"
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
				) : (
					<p className="singlePostDesc">{desc}</p>
				)}

				{updateMode && (
					<button className="singlePostButton" onClick={handleUpdate}>
						Update
					</button>
				)}
			</div>
		</div>
	);
};
