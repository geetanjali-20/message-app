import React, { useState } from "react";
import style from "../Styles/NewPost.module.css";

const NewPost = ({ onCancel,onAddPost }) => {
	const [author, setAuthor] = useState("");
	const [text, setText] = useState("");

	const onAddPosthandler = (event) => {
		event.preventDefault();
		const postData = {
			text: text,
			author: author
		}
		onAddPost(postData)
		onCancel();
	};

	const onChangeAuthor = (event) => {
		setAuthor(event.target.value);
	};
	const onChangeText = (event) => {
		setText(event.target.value);
	};
	return (
		<div className={style.newPostContainer}>
			<form className={style.form} onSubmit={onAddPosthandler}>
				<h2 className={style.newPostTitle}>New Post</h2>
				<p>
					<label htmlFor="name">Your name</label>
					<input
						type="text"
						id="name"
						required
						onChange={onChangeAuthor}
					/>
				</p>
				<p>
					<label htmlFor="body">Text</label>
					<textarea
						id="body"
						required
						rows={3}
						onChange={onChangeText}
					/>
				</p>
				<p className={style.actions}>
					<button type="submit">Post</button>
					<button type="button" onClick={onCancel}>
						Cancel
					</button>
				</p>
			</form>
		</div>
	);
};

export default NewPost;
