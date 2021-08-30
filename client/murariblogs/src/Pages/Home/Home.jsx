import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Posts } from "../../Components/Posts/Posts";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router";

export const Home = () => {
	const [posts, setPosts] = useState([]);

	const { search } = useLocation();

	// console.log(search);

	const fetchPosts = () => {
		return axios
			.get("https://murariblog.vercel.app/api/posts" + search)
			.then((res) => setPosts(res.data))
			.catch((er) => console.log(er));
	};

	useEffect(() => {
		fetchPosts();
		// eslint-disable-next-line
	}, [search]);

	return (
		<>
			<Header />
			<div className="home">
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</>
	);
};
