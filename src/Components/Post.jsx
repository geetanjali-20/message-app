import React from 'react'
import styles from "../Styles/Post.module.css"

const Post = ({author, text}) => {
  return (
    <div className={styles.post}>
        <div className={styles.author}>{author}</div>
        <div className={styles.text}>{text}</div>
    </div>
  )
}

export default Post