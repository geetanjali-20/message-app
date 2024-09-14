import React, { useEffect, useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import MainHeader from "./MainHeader";
import Modal from "./Modal";
import styles from "../Styles/Posts.module.css";

const Posts = () => {
	const [isModaOpen, setIsModalOpen] = useState(false);
	const [isfetching, setfetching] = useState(false);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchPost() {
      setfetching(true);
			const reponse = await fetch("http://localhost:8080/posts");
			const data = await reponse.json();
			setPosts(data.posts);
			setfetching(false);
		}
		fetchPost();
	}, []);

	const onAddPost = (postData) => {
		fetch("http://localhost:8080/posts", {
			method: "POST",
			body: JSON.stringify(postData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		setPosts((expost) => [postData, ...expost]);
	};

	const openModalHandler = () => {
		setIsModalOpen(true);
	};
	const closeModalHandler = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<MainHeader onChangeOpen={openModalHandler} />
			{isModaOpen && (
				<Modal isOpen={isModaOpen} onChangeClose={closeModalHandler}>
					<NewPost
						onCancel={closeModalHandler}
						onAddPost={onAddPost}
					/>
				</Modal>
			)}
			{!isfetching && posts.length > 0 ? (
				<div className={styles.posts}>
					{posts.map((post, index) => (
						<Post
							key={index}
							author={post.author}
							text={post.text}
						/>
					))}
				</div>
			) : (
				!isfetching && (
					<div style={{ textAlign: "center", color: "#fff" }}>
						<h2>No posts yet</h2>
						<p>Please Add somthing!</p>
					</div>
				)
			)}

			{isfetching && (
				<div style={{ textAlign: "center", color: "#fff" }}>
					Loading Posts
				</div>
			)}
		</>
	);
};

export default Posts;
