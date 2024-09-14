import React from "react";
import style from "../Styles/MainHeader.module.css";
import editIcon from "../assets/edit.png";

const MainHeader = ({onChangeOpen}) => {
	return (
		<div className={style.MainHeaderSection}>
			<div className={style.headingText}>React Message App</div>
			<button className={style.NewPostButton} onClick={onChangeOpen}>
				<img src={editIcon} alt="edit" width={"15px"}/>
				New Post
			</button>
		</div>
	);
};

export default MainHeader;
