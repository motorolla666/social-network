import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'


const MyPosts = () => {
    return <div className={s.postBlock}>
        <h3>My post</h3>
        <div>
            <div><textarea></textarea></div>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post message='Hi, how are you !!?' like="25 likes"/>
            <Post message="It's my post" like="15 likes"/>
        </div>
    </div>

}
export default MyPosts

