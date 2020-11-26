import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'


const MyPosts = () => {

    let posts = [
        {id:1,message:'Hi, how are you !!?',likesCount:"25 likes"},
        {id:2,message:'It\'s my post !!?',likesCount:"15 likes"}
    ]

    let postsElements = posts.map(p => <Post message={p.message} like={p.likesCount} /> )

    return <div className={s.postBlock}>
        <h3>My post</h3>
        <div>
            <div><textarea></textarea></div>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

}
export default MyPosts

