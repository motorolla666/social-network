import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {PostType} from "../../../index";

type MyPostsPropsType={
    posts:Array<PostType>
}

const MyPosts = (props:MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount} /> )

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

